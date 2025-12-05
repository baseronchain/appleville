const axios = require("axios");
const crypto = require("crypto");
const { HttpsProxyAgent } = require("https-proxy-agent");
const readline = require("readline");
require("dotenv").config();

const colors = {
  green: "\x1b[92m",
  yellow: "\x1b[93m",
  red: "\x1b[91m",
  cyan: "\x1b[96m",
  white: "\x1b[97m",
  bold: "\x1b[1m",
  reset: "\x1b[0m",
  blue: "\x1b[94m",
  magenta: "\x1b[95m"
const logger = {
  info: (msg) => console.log(`${colors.green}[✓] ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}[⚠] ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}[✗] ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}[✅] ${msg}${colors.reset}`),
  loading: (msg) => console.log(`${colors.cyan}[⟳] ${msg}${colors.reset}`),
  step: (msg) => console.log(`${colors.white}${colors.bold}[➤] ${msg}${colors.reset}`),
  banner: () => {
