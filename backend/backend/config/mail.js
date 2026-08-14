import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// Create and export the transporter with timeout settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 5000, // 5 seconds
  socketTimeout: 5000,     // 5 seconds
  greetingTimeout: 3000,   // 3 seconds
});

// Test email configuration
async function testEmailConnection() {
  console.log('📧 Testing Email Configuration...');
  console.log('----------------------------------------');
  console.log(`📧 Email: ${process.env.EMAIL_USER}`);
  console.log(`🌐 Host: ${process.env.SMTP_HOST}`);
  console.log(`🔌 Port: ${process.env.SMTP_PORT}`);
  console.log('----------------------------------------');

  try {
    await transporter.verify();
    console.log('✅ Email configuration is SUCCESSFUL!');
    console.log('✅ Server is ready to send emails');

    const testMail = await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '✅ Test Email - SMTP Working!',
      html: `
        <h2>Email Configuration Test</h2>
        <p>Your SMTP setup is working perfectly!</p>
        <p>Time: ${new Date().toLocaleString()}</p>
        <hr>
        <p>Configuration details:</p>
        <ul>
          <li>Host: ${process.env.SMTP_HOST}</li>
          <li>Port: ${process.env.SMTP_PORT}</li>
          <li>User: ${process.env.EMAIL_USER}</li>
        </ul>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log(`📨 Message ID: ${testMail.messageId}`);
    console.log('📧 Check your inbox for the test email');
  } catch (error) {
    console.error('❌ Email configuration ERROR:');
    console.error(`📛 ${error.message}`);

    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 FIX: Make sure EMAIL_PASS is your 16-character app password without spaces');
    }
    if (error.message.includes('ETIMEDOUT')) {
      console.log('\n🔧 FIX: Check your internet connection or firewall settings');
    }
  }
}

// Uncomment to test email configuration on startup
// testEmailConnection();

export { testEmailConnection };
export default transporter;