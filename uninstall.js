#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "hig.md";
const DEST = path.join(os.homedir(), ".claude", "commands", SKILL_NAME);

try {
  if (fs.existsSync(DEST)) {
    fs.unlinkSync(DEST);
    console.log(`[claude-skill-hig] Removed /hig skill from ${DEST}`);
  } else {
    console.log("[claude-skill-hig] Skill file not found, nothing to remove.");
  }

  console.log(
    "[claude-skill-hig] If you added the auto-detection snippet to CLAUDE.md, remove it manually."
  );
} catch (err) {
  console.error("[claude-skill-hig] Uninstall failed:", err.message);
  process.exit(0);
}
