import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

console.log('🔧 Initializing Email Configuration...');
console.log(`📧 Email User: ${process.env.EMAIL_USER}`);
console.log(`🌐 SMTP Host: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`);

// Create and export the transporter with optimized settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Connection timing settings
  connectionTimeout: 10000,  // 10 seconds (increased from 5)
  socketTimeout: 10000,      // 10 seconds (increased from 5)
  greetingTimeout: 5000,     // 5 seconds (increased from 3)
  
  // Connection pooling for better performance
  pool: {
    maxConnections: 5,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 5,
  },
  
  // Additional settings
  logger: true,
  debug: false,
  tls: {
    rejectUnauthorized: false  // Important for Gmail
  }
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