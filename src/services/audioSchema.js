/**
 * Schema definitions for the Pollinations Audio API
 */

/**
 * Schema for the respondAudio tool
 */
export const respondAudioSchema = {
  name: 'respondAudio',
  description: 'Generate an audio response to a text prompt and play it through the system',
  inputSchema: {
    type: 'object',
    properties: {
      prompt: {
        type: 'string',
        description: 'The text prompt to respond to with audio'
      },
      voice: {
        type: 'string',
        description: 'Voice to use for audio generation (default: "alloy"). Available options: "alloy", "echo", "fable", "onyx", "nova", "shimmer", "coral", "verse", "ballad", "ash", "sage", "amuch", "dan"'
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
 * Schema for the listAudioVoices tool
 */
export const listAudioVoicesSchema = {
  name: 'listAudioVoices',
  description: 'List all available audio voices for text-to-speech generation',
  inputSchema: {
    type: 'object',
    properties: {}
  }
};
