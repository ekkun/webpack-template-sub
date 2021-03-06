const nodeEnv = process.env.NODE_ENV;
const mode = nodeEnv ? nodeEnv : 'development';
const postcssPresetEnv = require( 'postcss-preset-env' );
const atImport = require( 'postcss-import' );
const url = require( 'postcss-url' );

module.exports = {
	map: mode === 'development',
	plugins: [
		require( 'postcss-omit-import-tilde' ),
		atImport( {
			extensions: [
				'.css',
				'.scss',
				'.pcss',
			],
		} ),
		url(),
		postcssPresetEnv( {
			stage: 1,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
			},
			autoprefixer: {
				grid: true,
			},
		} ),
		// mode === 'development' ? null : require( 'cssnano' )( {
		// 	preset: [ 'default', {
		// 		discardComments: {
		// 			removeAll: true,
		// 		},
		// 	} ],
		// } ),
		// mode === 'development' ? null : require( 'postcss-uncss' )( {
		// 	html: [ 'htdocs/**/*.html' ],
		// } ),
	],
};
