/**
 * Schema definitions for the Pollinations Text API
 */

/**
 * Schema for the respondText tool
 */
export const respondTextSchema = {
  name: 'respondText',
  description: 'Respond with text to a prompt using the Pollinations Text API',
  inputSchema: {
    type: 'object',
    properties: {
      prompt: {
        type: 'string',
        description: 'The text prompt to generate a response for'
      },
      model: {
        type: 'string',
        description: 'Model to use for text generation (default: "openai"). Available options: "openai", "anthropic", "mistral", "llama", "gemini" - use listTextModels to see all models'
      },
      seed: {
        type: 'number',
        description: 'Seed for reproducible results (default: random)'
      }
    },
    required: ['prompt']
  }
};

/**
 * Schema for the listTextModels tool
 */
export const listTextModelsSchema = {
  name: 'listTextModels',
  description: 'List available text models',
  inputSchema: {
    type: 'object',
    properties: {}
  }
};
