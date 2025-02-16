# AI Translation API with Caching

## 🚀 Overview

This project provides an AI-powered translation service using the **Gemini API** with **Upstash Redis** caching for optimized performance. It supports multiple language translations with caching to reduce redundant API requests.

## 🛠 Features

- 🌍 AI-powered language translation
- ⚡ Upstash Redis caching to reduce API calls
- 🔐 Secure API key usage with `.env` file
- 🧪 Jest tests for error handling

## 📦 Installation

Clone the repository and install dependencies:

```sh
npm i next-i18n-ai
```

## 🔑 Environment Variables

Create a `.env` file in the project root and add:

```env
API_KEY=your-gemini-api-key

```

## 🚀 Usage

### Run Example Translation

```sh
npx tsx ./examples/example.ts
```

## 📂 Project Structure

```
├── src
│   ├── ai-client.ts   # Main AIClient with API call & caching logic
│   ├── index.ts       # Export AIClient
├── examples
│   ├── example.ts     # Example usage
├── tests
│   ├── ai-client.test.ts  # Jest test cases
├── .env               # Environment variables
├── LICENSE            # MIT License
├── package.json       # Project dependencies
├── README.md          # Project documentation
```

## 🧪 Running Tests

Run unit tests using Jest:

```sh
npm test
```

## 🚀 Deployment

You can deploy this service on **Vercel, Railway, or Fly.io**:

### Deploy with Docker

1. Create a `Dockerfile`:

   ```dockerfile
   FROM node:18
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   CMD ["node", "src/index.js"]
   ```

2. Build & run:

   ```sh
   docker build -t ai-translation .
   docker run -p 3000:3000 ai-translation
   ```

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## 🤝 Contributing

PRs are welcome! Open an issue for discussions or improvements.

## 📞 Contact

For any queries, reach out to [**Your Name**](mailto\:your-email@example.com).

