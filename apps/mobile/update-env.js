const fs = require("fs");
const path = require("path");

const LOG_PATH = path.join(__dirname, "../backend/ngrok.log");
const ENV_PATH = path.join(__dirname, ".env");

function updateEnv() {
  try {
    if (!fs.existsSync(LOG_PATH)) {
      console.log("⏳ Waiting for ngrok log file...");
      return false;
    }

    const logContent = fs.readFileSync(LOG_PATH, "utf8");
    const match = logContent.match(
      /url=(https:\/\/[a-zA-Z0-9.-]+\.ngrok-free\.app)/
    );

    if (match && match[1]) {
      const ngrokUrl = match[1];
      let envContent = "";

      if (fs.existsSync(ENV_PATH)) {
        envContent = fs.readFileSync(ENV_PATH, "utf8");
      }

      const newLine = `EXPO_PUBLIC_API_URL=${ngrokUrl}`;

      if (envContent.includes("EXPO_PUBLIC_API_URL=")) {
        envContent = envContent.replace(/EXPO_PUBLIC_API_URL=.*/g, newLine);
      } else {
        envContent += `\n${newLine}`;
      }

      fs.writeFileSync(ENV_PATH, envContent.trim() + "\n");
      console.log(`✅ Ngrok URL synchronized: ${ngrokUrl}`);
      return true;
    }

    return false;
  } catch (err) {
    console.error("❌ Error updating .env file:", err);
    process.exit(1);
  }
}

const trySync = (attempts = 0) => {
  if (updateEnv() || attempts > 10) return;
  setTimeout(() => trySync(attempts + 1), 2000);
};

trySync();
