import Contact from "../model/contactModel.js";
import transporter from "../config/mail.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, phone, email, address, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      phone,
      email,
      address,
      message,
    });

    // Send email to company
    await transporter.sendMail({
      from: `"TrioAAS Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Forward all emails to business owner
    await transporter.sendMail({
      from: `"TrioAAS Infotech" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
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

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};