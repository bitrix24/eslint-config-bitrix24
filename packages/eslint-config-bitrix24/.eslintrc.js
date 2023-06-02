module.exports = {
	extends: './index.js',
	rules: {
		'quote-props': 'off',
		'unicorn/no-array-callback-reference': 'off',
	},
	globals: {
		module: 'readonly',
		require: 'readonly',
	},
};
