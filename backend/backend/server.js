import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

import contactRoutes from "./routes/ContactRoute.js";
import transporter, { emailConfigStatus } from "./config/mail.js";
import { getEmailLogs } from "./utils/emailLogger.js";

dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log("MongoDB connection failed:", err.message);
  });
app.get("/", (req, res) => {
  res.send("Trionexa Backend is running successfully 🚀");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

app.get("/api/email-logs", (req, res) => {
  try {
    const logs = getEmailLogs();
    res.status(200).json({
      success: true,
      count: logs.length,
      logs: logs.slice(-20), // Last 20 logs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch email logs: " + error.message,
    });
  }
});

app.get("/api/test-email", async (req, res) => {
  try {
    const emailUser = String(process.env.EMAIL_USER || '').trim();
    if (!emailUser) {
      return res.status(500).json({
        success: false,
        message: "EMAIL_USER is not configured.",
        config: emailConfigStatus,
      });
    }

    await transporter.verify();

    const result = await transporter.sendMail({
      from: `"TrioAAS Website" <${emailUser}>`,
      to: emailUser,
      subject: "SMTP verification email",
      text: "This is a backend SMTP verification email. If you received it, the mail service is working.",
    });

    res.status(200).json({
      success: true,
      message: "SMTP test email sent successfully.",
      messageId: result.messageId,
      response: result.response,
      config: emailConfigStatus,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "SMTP verification failed.",
      error: error.message,
      code: error.code,
      config: emailConfigStatus,
    });
  }
});

app.use("/api/contact", contactRoutes);
app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
