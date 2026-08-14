import Contact from "../model/contactModel.js";
import EmailService from "../services/EmailServices.js";
import { logEmail } from "../utils/emailLogger.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, phone, email, address, message } = req.body;
    console.log("1. contact request received:", req.body);

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email, and Message are required fields",
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Save to MongoDB FIRST
    const contact = await Contact.create({
      name,
      phone,
      email,
      address,
      message,
    });
    console.log("2. ✅ contact saved to MongoDB:", contact._id);

    // Return success immediately to user
    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: contact,
    });

    // Send emails asynchronously in the background (don't wait for them)
    console.log("3. 📧 Starting background email sending...");
    
    sendEmailsAsync(name, phone, email, address, message).catch((err) => {
      console.error("❌ Background email error:", err.message);
    });

  } catch (error) {
    console.error("❌ Error in sendMessage:", error);
    console.error("Error Stack:", error.stack);

    let statusCode = 500;
    let message = error.message || "Failed to process request";

    // More specific error detection
    if (error.message.includes("SMTP")) {
      statusCode = 503;
      message = "SMTP Error: " + error.message;
    } else if (error.message.includes("MongoDB") || error.message.includes("connection")) {
      statusCode = 503;
      message = "Database Error: " + error.message;
    } else if (error.message.includes("ENOTFOUND") || error.message.includes("ECONNREFUSED")) {
      statusCode = 503;
      message = "Connection Error: " + error.message;
    } else if (error.name === "ValidationError") {
      statusCode = 400;
      message = "Validation Error: " + error.message;
    }

    res.status(statusCode).json({
      success: false,
      message: message,
      errorType: error.name,
    });
  }
};

// Async function to send emails in background with retry logic
async function sendEmailsAsync(name, phone, email, address, message) {
  const maxRetries = 2;
  const userData = { name, phone, email, address, message };

  async function sendWithRetry(emailType, emailFunction) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`📧 [${emailType}] Attempt ${attempt}/${maxRetries}...`);
        
        const result = await emailFunction();
        
        console.log(`✅ [${emailType}] Email sent successfully!`);
        console.log(`   MessageID: ${result.messageId}`);
        
        // Log successful email
        logEmail({
          type: emailType,
          recipient: emailType === 'COMPANY_EMAIL' ? process.env.EMAIL_USER : email,
          status: 'SUCCESS',
          messageId: result.messageId,
          attempt: attempt,
        });
        
        return true;
      } catch (error) {
        console.error(`❌ [${emailType}] Attempt ${attempt} failed!`);
        console.error(`   Error: ${error.message}`);
        console.error(`   Code: ${error.code}`);
        
        // Log failed attempt
        logEmail({
          type: emailType,
          recipient: emailType === 'COMPANY_EMAIL' ? process.env.EMAIL_USER : email,
          status: 'FAILED',
          error: error.message,
          errorCode: error.code,
          attempt: attempt,
        });
        
        if (attempt < maxRetries) {
          console.log(`⏳ [${emailType}] Retrying in 2 seconds...`);
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    }
    
    // Log final failure
    logEmail({
      type: emailType,
      recipient: emailType === 'COMPANY_EMAIL' ? process.env.EMAIL_USER : email,
      status: 'FINAL_FAILURE',
      attempt: maxRetries,
    });
    
    return false;
  }

  try {
    console.log("\n========== EMAIL SENDING STARTED ==========");
    console.log(`Recipient: ${name} (${email})`);
    console.log(`Admin Email: ${process.env.EMAIL_USER}`);
    console.log("==========================================\n");

    // Send both emails in parallel using EmailService
    const [companyResult, customerResult] = await Promise.all([
      sendWithRetry("COMPANY_EMAIL", () => EmailService.sendBusinessEmail(userData)),
      sendWithRetry("CUSTOMER_EMAIL", () => EmailService.sendThankYouEmail(userData)),
    ]);

    console.log("\n========== EMAIL SENDING COMPLETED ==========");
    console.log(`Company Email: ${companyResult ? "✅ Sent" : "❌ Failed"}`);
    console.log(`Customer Email: ${customerResult ? "✅ Sent" : "❌ Failed"}`);
    console.log("===========================================\n");

    if (!companyResult || !customerResult) {
      console.warn("⚠️ WARNING: Some emails failed to send after retries");
    }
  } catch (error) {
    console.error("\n❌ CRITICAL ERROR in sendEmailsAsync:", error);
    console.error("Error Message:", error.message);
    console.error("Error Code:", error.code);
  }
}
