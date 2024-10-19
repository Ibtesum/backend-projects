#!/usr/bin/env node

import { promises as fs } from "fs";
import { basename } from "path";

// Function to display usage information
function showUsage() {
  console.log("Usage: ccwc -c <file>");
  console.log("Usage: ccwc -l <file>");
}

// Main function to count bytes in the file
async function countBytes(filePath) {
  try {
    // Get file statistics asynchronously
    const stats = await fs.stat(filePath);
    // Output the result
    console.log(`${stats.size} ${basename(filePath)}`);
  } catch (error) {
    // Handle errors (e.g., file not found)
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

read;

// Check if the arguments are correct
if (
  process.argv.length !== 4 ||
  process.argv[2] !== "-c" ||
  process.argv[2] !== "-l"
) {
  showUsage();
  process.exit(1);
}

switch (process.argv[2]) {
  case "-c":
    break;

  case "-l":
    break;
  default:
    break;
}

// Get the file path from the command line arguments
const filePath = process.argv[3];

// Validate the file path and count bytes
countBytes(filePath);
