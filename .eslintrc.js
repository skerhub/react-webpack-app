module.exports = {
	parser: '@typescript-eslint/parser',
	settings: {
		react: {
			pragma: "React",
			version: "detect"
		}
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	rules: {
		"react/react-in-jsx-scope": "off",
		"no-irregular-whitespace": 0,
		"no-useless-escape": "error",
		"no-var": "error",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"indent": ["error","tab",{ "SwitchCase": 1 }],
		"quotes": ["error", "double"],
		"space-infix-ops": ["error"],
		"space-before-blocks": ["error",{"functions": "always","classes": "never"}],
		"space-before-function-paren": ["error","never"],
		"key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
		"comma-spacing": ["error", { "before": false, "after": true }],
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-var-requires": 0,
		"react/display-name": "off",
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-unnecessary-type-constraint": "off", // 兼容当前版本的ts语法检测
		"prefer-const": 1
	}
}