#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "hig.md";
const SOURCE = path.join(__dirname, "commands", SKILL_NAME);
const CLAUDE_DIR = path.join(os.homedir(), ".claude", "commands");
const DEST = path.join(CLAUDE_DIR, SKILL_NAME);

try {
  if (!fs.existsSync(SOURCE)) {
    console.log("[claude-skill-hig] Source skill file not found, skipping.");
    process.exit(0);
  }

  fs.mkdirSync(CLAUDE_DIR, { recursive: true });
  fs.copyFileSync(SOURCE, DEST);
  console.log(`[claude-skill-hig] Installed /hig skill to ${DEST}`);

  // Show auto-detection snippet info
  const snippetPath = path.join(__dirname, "claude-md-snippet.md");
  if (fs.existsSync(snippetPath)) {
    console.log("");
    console.log(
      "[claude-skill-hig] For auto-detection (optional), add the following to your project's CLAUDE.md:"
    );
    console.log(`  cat ${snippetPath}`);
  }

  console.log("");
  console.log("[claude-skill-hig] Usage: /hig storekit");
  console.log("[claude-skill-hig] Usage: /hig 인앱결제 구현해줘");
} catch (err) {
  console.error("[claude-skill-hig] Install failed:", err.message);
  process.exit(0); // Don't block npm install on failure
}
