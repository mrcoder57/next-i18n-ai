import { jest } from "@jest/globals";
import { AIClient,AIClientConfig } from "../../src/ai-client";
const customConfig: AIClientConfig = {
  apiKey: 'api-key',
  provider: 'gemini'
};

describe("AIClient", () => {
  const client = new AIClient(customConfig);

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle API errors gracefully", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({
        error: { message: "Invalid API key" },
      }),
    } as Response);

    await expect(client.translate("Hello", "es")).rejects.toThrow(
      "Invalid API key"
    );
  });
});
