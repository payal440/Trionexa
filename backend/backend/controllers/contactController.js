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
    console.log("2. contact saved to MongoDB:", contact);

    // Send email to company
    await transporter.sendMail({
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
    console.log("3. email sent to company:", process.env.EMAIL_USER);

    // Send thank you email to customer
    await transporter.sendMail({
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
    console.log("4. thank you email sent to customer:", email);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: contact,
    });
  } catch (error) {
    console.error("❌ Error in sendMessage:", error);

    let statusCode = 500;
    let message = "Failed to process request";

    if (error.message.includes("SMTP")) {
      statusCode = 503;
      message = "Email service unavailable - check SMTP configuration";
    } else if (error.message.includes("MongoDB") || error.message.includes("connection")) {
      statusCode = 503;
      message = "Database connection failed";
    } else if (error.name === "ValidationError") {
      statusCode = 400;
      message = `Validation Error: ${error.message}`;
    }

    res.status(statusCode).json({
      success: false,
      message: message,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
