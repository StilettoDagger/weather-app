import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: { js },
		extends: ["js/recommended"],
	},
	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: { globals: globals.browser },
	},
	{
		files: ["**/*.json"],
		plugins: { json },
		language: "json/json",
		extends: ["json/recommended"],
	},
	{
		files: [
			"*.config.{js,cjs,mjs}",
			"webpack*.{js,cjs,mjs}",
			"scripts/**/*.{js,cjs,mjs}",
			"*.cjs",
			"*.mjs",
			"*.js",
		],
		ignores: ["src/**/*"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "commonjs",
			globals: {
				...globals.node,
			},
		},
	},
	eslintConfigPrettier,
]);
