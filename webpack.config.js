require( 'dotenv' ).config();
const nodeEnv = process.env.NODE_ENV;

const mode = nodeEnv ? nodeEnv : 'development';
//const mode = 'development';

function camelCaseDash( string ) {
	return string.replace(
		/-([a-z])/g,
		( match, letter ) => letter.toUpperCase()
	);
}

const externals = {
	jquery: 'jQuery'
};

const enableSouceMap = mode === 'development' ? 'source-map' : false;

const config = {
	mode: mode,
	module: {
		rules: [
			{
				test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
				use: {
					loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    modules: false,
                    useBuiltIns: "usage",
                    corejs: 3,
                    targets: {
                        "ie": "11"
                    }
                }]]
            }
				},
			},
		],
	},
	devtool: enableSouceMap,
	externals,
	resolve: {
		extensions: [ '.js', '.jsx' ],
	},
	performance: { hints: false },
};

module.exports = [
	{
		...config,
		...{
			entry: {
				main: [ `./src/assets/js/index.js` ],
			},
			output: {
				libraryTarget: 'window',
				path: __dirname + `/htdocs/online/assets/js`,
				publicPath: `/htdocs/online/assets/js/`,
			},
		},
	},
];

