#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";

const TEMPLATE_DIR = path.resolve(
  __dirname,
  "../templates/bun-express-template"
);
const TARGET_DIR = process.argv[2] || "my-express-app";

async function init() {
  console.log(`Initializing project in: ${TARGET_DIR}`);

  if (fs.existsSync(TARGET_DIR)) {
    console.error(`Error: Target directory "${TARGET_DIR}" already exists.`);
    process.exit(1);
  }

  try {
    await fs.copy(TEMPLATE_DIR, TARGET_DIR);
    console.log("Template copied successfully!");
    console.log("Installing dependencies...");
    process.chdir(TARGET_DIR);
    await fs.promises.exec("bun install");
    console.log("Project initialized successfully!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

init();
