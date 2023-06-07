module.exports = {
	extends: [
		'@bitrix24/bitrix24',
	],
	plugins: [
		'es',
		'@bitrix24/bitrix24-janative',
	],
	globals: {
		jn: 'readonly',
		env: 'readonly',
		layout: 'readonly',
		layoutWidget: 'readonly',
		Application: 'readonly',
		result: 'readonly',
		device: 'readonly',
		Keyboard: 'readonly',
		LayoutComponent: 'readonly',
		BBCodeText: 'readonly',
		Button: 'readonly',
		CalendarView: 'readonly',
		CameraView: 'readonly',
		DraggableView: 'readonly',
		GridView: 'readonly',
		Image: 'readonly',
		ImageButton: 'readonly',
		ListView: 'readonly',
		Loader: 'readonly',
		LottieView: 'readonly',
		MoneyField: 'readonly',
		PanView: 'readonly',
		PDFView: 'readonly',
		PhoneNumberField: 'readonly',
		ProgressView: 'readonly',
		RefreshView: 'readonly',
		ScrollView: 'readonly',
		Shadow: 'readonly',
		ShimmerView: 'readonly',
		Slider: 'readonly',
		TabView: 'readonly',
		TaskListView: 'readonly',
		Text: 'readonly',
		TextField: 'readonly',
		TextInput: 'readonly',
		Video: 'readonly',
		View: 'readonly',
		WebView: 'readonly',
		PageManager: 'readonly',
		currentDomain: 'readonly',
		component: 'readonly',
		dialogs: 'readonly',
		helpdesk: 'readonly',
		jnComponent: 'readonly',
		viewer: 'readonly',
		requireLazy: 'readonly',
		jnExtensionData: 'readonly',
		navigator: 'readonly',
	},
	rules: {
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'module',
			],
		}],

		'max-lines-per-function': 'off',
		'@bitrix24/bitrix24-janative/no-global-require': 'error',
		'@bitrix24/bitrix24-janative/no-static-variable-in-class': 'error',

		'flowtype/require-return-type': 'off',

		'@bitrix24/bitrix24-rules/no-native-events-binding': 'off',
		'@bitrix24/bitrix24-rules/no-typeof': 'off',
		'@bitrix24/bitrix24-rules/no-bx-message': 'off',
		'@bitrix24/bitrix24-rules/no-classlist': 'off',
		'@bitrix24/bitrix24-rules/no-style': 'off',
		'@bitrix24/bitrix24-rules/no-jsdd': 'off',
		'@bitrix24/bitrix24-rules/no-native-dialogs': 'off',
		'@bitrix24/bitrix24-rules/no-native-dom-methods': 'off',
		'@bitrix24/bitrix24-rules/no-eventemitter-without-namespace': 'off',
		'@bitrix24/bitrix24-rules/no-bx': 'off',
	},
};
