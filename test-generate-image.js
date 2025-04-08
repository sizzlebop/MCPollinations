#!/usr/bin/env node

import { generateImage } from './src/services/imageService.js';

async function testGenerateImage() {
  try {
    console.log('Testing generateImage function...');
    
    // Call generateImage with explicit home directory path
    const result = await generateImage(
      'A simple test image with a red circle on a white background',
      'flux',
      123456, // fixed seed for reproducibility
      512,    // smaller size for faster generation
      512,
      true,   // enhance
      false,  // safe
      '~/mcpollinations-output', // explicitly use home directory
      'test-direct-call',        // specific filename
      'png'
    );
    
    console.log('Image generated successfully!');
    console.log('File path:', result.filePath);
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

testGenerateImage();
