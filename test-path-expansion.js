#!/usr/bin/env node

import os from 'os';
import path from 'path';
import fs from 'fs';

// Test path expansion
const outputPath = '~/mcpollinations-output';
let expandedOutputPath = outputPath;

if (outputPath.startsWith('~')) {
  expandedOutputPath = path.join(os.homedir(), outputPath.substring(1));
}

console.log('Original path:', outputPath);
console.log('Home directory:', os.homedir());
console.log('Expanded path:', expandedOutputPath);

// Create the directory
try {
  if (!fs.existsSync(expandedOutputPath)) {
    fs.mkdirSync(expandedOutputPath, { recursive: true });
    console.log('Directory created successfully');
  } else {
    console.log('Directory already exists');
  }
  
  // Create a test file
  const testFilePath = path.join(expandedOutputPath, 'test-file.txt');
  fs.writeFileSync(testFilePath, 'This is a test file');
  console.log('Test file created at:', testFilePath);
} catch (error) {
  console.error('Error:', error);
}
