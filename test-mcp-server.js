#!/usr/bin/env node

import fetch from 'node-fetch';

async function testMcpServer() {
  try {
    console.log('Testing MCP server...');
    
    // Call the MCP server directly
    const response = await fetch('http://localhost:3000/v1/tools', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'generateImage',
        arguments: {
          prompt: 'A simple test image with a blue square on a white background',
          model: 'flux',
          seed: 654321,
          width: 512,
          height: 512,
          enhance: true,
          safe: false,
          outputPath: '~/mcpollinations-output',
          fileName: 'test-mcp-server',
          format: 'png'
        }
      }),
    });
    
    const result = await response.json();
    console.log('Response from MCP server:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error calling MCP server:', error);
  }
}

// Start the MCP server in a separate process
import { exec } from 'child_process';
const server = exec('node pollinations-mcp-server.js');

// Wait for the server to start
setTimeout(() => {
  testMcpServer().finally(() => {
    // Kill the server when done
    server.kill();
  });
}, 2000);
