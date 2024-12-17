import { createRequire } from "node:module";
import { defineConfig } from "vitest/config";

const require = createRequire(import.meta.url);

export default defineConfig({
  test: {
    setupFiles: [require.resolve("allure-vitest/setup")],
    reporters: [
      "default",
      ["allure-vitest/reporter", { resultsDir: "./out/allure-results" }],
    ],
  },
});
