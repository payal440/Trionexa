import Contact from "../model/contactModel.js";
import transporter from "../config/mail.js";

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

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      phone,
      email,
      address,
      message,
    });
    console.log("2. ✅ contact saved to MongoDB:", contact._id);

    // Send email to company
    console.log("3. 📧 Sending inquiry email to company...");
    const companyEmailResult = await transporter.sendMail({
      from: `"TrioAAS Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    console.log("3. ✅ inquiry email sent to company");

    // Send thank you email to customer
    console.log("4. 📧 Sending thank you email to customer...");
    const customerEmailResult = await transporter.sendMail({
      from: `"TrioAAS Infotech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You For Contacting TrioAAS",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting <b>TrioAAS Infotech</b>.</p>

        <p>We have received your inquiry successfully.</p>

        <p>Our team will contact you within <b>24 hours</b>.</p>

        <br>

        Regards,<br>
        <b>TrioAAS Infotech</b>
      `,
    });
    console.log("4. ✅ thank you email sent to customer");

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: contact,
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
