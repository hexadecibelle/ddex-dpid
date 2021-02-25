module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'jest'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:import/errors',
		'plugin:import/warnings'
	]
};
