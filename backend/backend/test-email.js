import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

console.log('='.repeat(60));
console.log('EMAIL CONFIGURATION DIAGNOSTIC');
console.log('='.repeat(60));

console.log('\n📋 Environment Variables:');
console.log(`  EMAIL_USER: ${process.env.EMAIL_USER}`);
console.log(`  EMAIL_PASS: ${process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET'}`);
console.log(`  SMTP_HOST: ${process.env.SMTP_HOST}`);
console.log(`  SMTP_PORT: ${process.env.SMTP_PORT}`);
console.log(`  SMTP_SECURE: ${process.env.SMTP_SECURE}`);

console.log('\n🔍 Email Password Check:');
if (!process.env.EMAIL_PASS) {
  console.error('❌ EMAIL_PASS is NOT SET!');
  process.exit(1);
}
if (process.env.EMAIL_PASS.startsWith(' ')) {
  console.error('❌ EMAIL_PASS has leading space!');
  process.exit(1);
}
if (process.env.EMAIL_PASS.endsWith(' ')) {
  console.error('❌ EMAIL_PASS has trailing space!');
  process.exit(1);
}
console.log('✅ EMAIL_PASS is valid (no leading/trailing spaces)');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
  tls: {
    rejectUnauthorized: false
  }
});

console.log('\n🧪 Testing SMTP Connection...');

(async () => {
  try {
    const verified = await transporter.verify();
    console.log('✅ SMTP Connection Verified!');
    
    console.log('\n📧 Sending Test Email...');
    const result = await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '✅ TEST EMAIL - SMTP Working!',
      html: `<h2>SMTP Test Successful</h2><p>Time: ${new Date().toISOString()}</p>`,
    });
    
    console.log('✅ Test email sent successfully!');
    console.log(`   Message ID: ${result.messageId}`);
    console.log('\n✅ ALL SYSTEMS WORKING!');
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('Code:', error.code);
    if (error.message.includes('Invalid login')) {
      console.error('\n🔧 FIX: Email credentials are wrong or app password expired');
      console.error('   For Gmail: Use 16-character app password, not regular password');
    }
    process.exit(1);
  }
})();
