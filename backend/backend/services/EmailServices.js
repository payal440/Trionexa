import transporter from '../config/mail.js';

class EmailService {
  static async sendBusinessEmail(userData) {
    const { name, email, phone, address, message } = userData;
    
    const mailOptions = {
      from: `"TrioAAS Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '📩 New Contact Form Submission',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a56db; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { padding: 20px; background: #f9fafb; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { margin-top: 5px; color: #111827; padding: 8px; background: white; border-left: 3px solid #1a56db; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Address:</div>
                <div class="value">${address || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the TrioAAS Website contact form.</p>
              <p>Time: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    return await transporter.sendMail(mailOptions);
  }

  static async sendThankYouEmail(userData) {
    const { name, email } = userData;

    const mailOptions = {
      from: `"TrioAAS Infotech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You For Contacting TrioAAS',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a56db; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { padding: 30px 20px; background: #f9fafb; }
            .message { line-height: 1.6; color: #374151; }
            .highlight { color: #1a56db; font-weight: bold; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Us!</h2>
            </div>
            <div class="content">
              <p class="message">Dear <span class="highlight">${name}</span>,</p>
              <p class="message">Thank you for reaching out to <span class="highlight">TrioAAS Infotech</span>. We have received your inquiry successfully.</p>
              <p class="message">Our team will review your message and get back to you within <span class="highlight">24 hours</span> during business days.</p>
              <p class="message">If you need immediate assistance, please don't hesitate to call us.</p>
              <p class="message">We appreciate your interest in our services!</p>
            </div>
            <div class="footer">
              <p>Regards,<br><strong>TrioAAS Infotech Team</strong></p>
              <p>This is an automated response. Please do not reply to this email.</p>
              <p>&copy; 2024 TrioAAS Infotech. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Thank You for Contacting Us!

        Dear ${name},

        Thank you for reaching out to us. We have received your message and appreciate your interest in our services.

        Our team will review your inquiry and get back to you within 24-48 hours during business days.

        If you need immediate assistance, please call us at +1-800-XXX-XXXX.

        This is an automated response. Please do not reply to this email.
      `,
    };

    return await transporter.sendMail(mailOptions);
  }
}

export default EmailService;
