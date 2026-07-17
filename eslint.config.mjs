import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-restricted-imports": ["error", {
        "patterns": [
          {
            "group": ["@data/*", "@presentation/*"],
            "zones": [{ "target": "./src/domain/**/*" }],
            "message": "🚨 Clean Architecture Violation: The Domain layer must remain completely isolated and cannot import from Data or Presentation."
          },
          {
            "group": ["@presentation/*"],
            "zones": [{ "target": "./src/data/**/*" }],
            "message": "🚨 Clean Architecture Violation: The Data layer cannot import from the Presentation UI layer."
          }
        ]
      }]
    }
  }
];

export default eslintConfig;