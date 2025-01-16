#!/usr/bin/env node

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_DIR = path.resolve(
  __dirname,
  "../templates/bun-express-template"
);
const TARGET_DIR = process.argv[3] || "my-express-app";

const init = async () => {
  console.log(`Initializing project in: ${TARGET_DIR}`);

  if (fs.existsSync(TARGET_DIR)) {
    console.error(`Error: Target directory "${TARGET_DIR}" already exists.`);
    process.exit(1);
  }

  try {
    fs.cpSync(TEMPLATE_DIR, TARGET_DIR, { recursive: true });
    console.log("Template copied successfully!");

    console.log("Installing dependencies...");
    process.chdir(TARGET_DIR);
    execSync("bun install", { stdio: "inherit" });
    console.log("Project initialized successfully!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

init();
