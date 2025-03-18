#!/usr/bin/env node
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs-extra";
import { execSync } from "child_process";
import chalk from "chalk";
// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to copy the template files
const createProject = async () => {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log(chalk.red("❌ Please provide a project name"));
        console.log(chalk.yellow("Usage: npx add-node-ts-starter my-app"));
        process.exit(1);
    }
    const projectName = args[0];
    const targetPath = path.join(process.cwd(), projectName);
    const templatePath = path.join(__dirname, "../../template");
    // Check if directory exists
    if (fs.existsSync(targetPath)) {
        console.log(chalk.red(`❌ Directory ${projectName} already exists.`));
        process.exit(1);
    }
    console.log(chalk.blue(`🚀 Creating project: ${projectName}`));
    try {
        // Copy template to the target directory
        await fs.copy(templatePath, targetPath);
        console.log(chalk.green("✅ Template copied successfully!"));
        // Change to project directory
        process.chdir(targetPath);
        // Install dependencies
        console.log(chalk.blue("📦 Installing dependencies..."));
        execSync("npm install", { stdio: "inherit" });
        console.log(chalk.green("🎉 Project setup complete!"));
        console.log(chalk.cyan(`cd ${projectName} && npm start`));
    }
    catch (error) {
        console.error(chalk.red("❌ Error during project creation:"), error);
    }
};
// Run the function
createProject();
