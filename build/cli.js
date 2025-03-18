#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
const args = process.argv.slice(2);
const projectName = args[0];
if (!projectName) {
    console.error("❌ Please provide a project name.");
    process.exit(1);
}
const targetDir = path.join(process.cwd(), projectName);
fs.copySync(path.join(__dirname, ".."), targetDir, { filter: (src) => !src.includes("node_modules") });
console.log(`✅ Project ${projectName} created successfully!`);
console.log(`👉 Next steps:
cd ${projectName}
npm install
npm run server`);
