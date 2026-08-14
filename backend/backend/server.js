import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

import contactRoutes from "./routes/ContactRoute.js";

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

app.use("/api/contact", contactRoutes);
app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
