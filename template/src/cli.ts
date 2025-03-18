#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import chalk from "chalk";

const projectName = process.argv[2];

if (!projectName) {
  console.log(chalk.red("❌ Please provide a project name."));
  console.log(chalk.yellow("Example: npx add-node-ts-starter my-app"));
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, "../template"); // Where your starter files are stored

async function createProject() {
  console.log(chalk.blue(`🚀 Creating a new project in ${projectPath}`));

  try {
    // Copy template files
    fs.copySync(templatePath, projectPath);

    // Change directory
    process.chdir(projectPath);

    console.log(chalk.green("📦 Installing dependencies..."));
    execSync("npm install", { stdio: "inherit" });

    console.log(chalk.green(`✅ Project created successfully!`));
    console.log(chalk.cyan(`\nNext steps:`));
    console.log(chalk.yellow(`  cd ${projectName}`));
    console.log(chalk.yellow(`  npm run dev`));
  } catch (error) {
    console.log(chalk.red("❌ Something went wrong:", error));
  }
}

createProject();
