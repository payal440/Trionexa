import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDir = path.join(__dirname, '../logs');

// Create logs directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFile = path.join(logDir, 'email-logs.json');

export function logEmail(emailData) {
  try {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      ...emailData,
    };

    let logs = [];
    
    // Read existing logs
    if (fs.existsSync(logFile)) {
      try {
        const content = fs.readFileSync(logFile, 'utf-8');
        logs = JSON.parse(content);
      } catch (e) {
        logs = [];
      }
    }

    // Add new log
    logs.push(logEntry);

    // Keep only last 100 logs
    if (logs.length > 100) {
      logs = logs.slice(-100);
    }

    // Write back
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2), 'utf-8');

    // Also log to console
    console.log(`[EMAIL LOG] ${logEntry.type} - ${logEntry.recipient}: ${logEntry.status}`);
    
  } catch (error) {
    console.error('Error writing email log:', error.message);
  }
}

export function getEmailLogs() {
  try {
    if (fs.existsSync(logFile)) {
      const content = fs.readFileSync(logFile, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading email logs:', error.message);
  }
  return [];
}
