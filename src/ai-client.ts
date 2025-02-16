export interface AIClientConfig {
    apiKey: string;
    provider?: 'gemini' | 'custom';
    baseUrl?: string;
  }
  
  export class AIClient {
    private defaultBaseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  
    constructor(private config: AIClientConfig) {
      if (!config.apiKey) {
        throw new Error('API key is required');
      }
    }
  
    private getApiUrl(): string {
      return `${this.config.baseUrl || this.defaultBaseUrl}?key=${this.config.apiKey}`;
    }
  
    async translate(text: string, targetLang: string): Promise<string> {
      try {
        const response = await fetch(this.getApiUrl(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: `Translate the following to ${targetLang}: "${text}"` }]
              }
            ]
          })
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          console.error("API Error Response:", data);
          throw new Error(`API request failed with status ${response.status} - ${data.error?.message || "Unknown error"}`);
        }
  
        const translatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!translatedText) {
          throw new Error('Invalid response format from API');
        }
  
        return translatedText;
      } catch (error: any) {
        console.error('Translation error:', error);
        throw new Error(`Translation failed: ${error.message}`);
      }
    }
  }
  