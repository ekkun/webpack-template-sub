module.exports = (function (eleventyConfig) {
	// 11ty設定
	return {
		templateFormats: [
			"md",
			"njk",
			"html"
		],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "src",
			includes: "_layouts",
			data: "_data",
			output: "htdocs"
		}
	};
});
