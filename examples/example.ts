import 'dotenv/config'; // Automatically loads .env variables
import { AIClient } from '../src/ai-client.js';

const client = new AIClient({
  apiKey: process.env.API_KEY||'api-key',
  provider: 'gemini'
});


async function runExample() {
  try {
    console.log('Translating "Hello, how are you?" to hindi...');
    const result = await client.translate('Hello, how are you?', 'es');
    console.log('Translated Text:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

runExample();
