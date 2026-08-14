import transporter from '../config/mail.js';

class EmailService {
  static async sendBusinessEmail(userData) {
    const { name, email, phone, subject, message } = userData;
    const mailOptions = {
      from: `"Business Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a56db; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9fafb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { margin-top: 5px; color: #111827; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
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
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your business website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        ----------------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    return await transporter.sendMail(mailOptions);
  }

  static async sendThankYouEmail(userData) {
    const { name, email } = userData;

    const mailOptions = {
      from: `"Business Name" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Us',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a56db; color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 30px 20px; background: #f9fafb; }
            .message { line-height: 1.6; color: #374151; }
            .button { display: inline-block; background: #1a56db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Us!</h2>
            </div>
            <div class="content">
              <p class="message">Dear ${name},</p>
              <p class="message">Thank you for reaching out to us. We have received your message and appreciate your interest in our services.</p>
              <p class="message">Our team will review your inquiry and get back to you within 24-48 hours during business days.</p>
              <p class="message">If you need immediate assistance, please don't hesitate to call us at <strong>+1-800-XXX-XXXX</strong>.</p>
              <div style="text-align: center;">
                <a href="https://yourbusiness.com" class="button">Visit Our Website</a>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated response. Please do not reply to this email.</p>
              <p>&copy; 2024 Your Business Name. All rights reserved.</p>
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