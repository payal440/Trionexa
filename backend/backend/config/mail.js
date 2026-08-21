import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const requiredEnv = {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  
};

const missingEnv = Object.entries(requiredEnv)
  .filter(([, value]) => !value || !String(value).trim())
  .map(([key]) => key);
  console.log(`[MAIL] Required email environment variables: ${Object.keys(requiredEnv).join(', ')}`);
if (missingEnv.length) {
  console.warn(`[MAIL] Missing email environment variables: ${missingEnv.join(', ')}`);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
  greetingTimeout: 5000,
  pool: {
    maxConnections: 5,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 5,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const emailConfigStatus = {
  missingEnv,
  smtpHost: process.env.SMTP_HOST || 'not-set',
  emailUser: process.env.EMAIL_USER || 'not-set',
  smtpPort: process.env.SMTP_PORT || 'not-set',
  smtpSecure: process.env.SMTP_SECURE || 'not-set',
};

export default transporter;