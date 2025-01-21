module.exports = function (eleventyConfig) {
    // Copy `src/css/styles.css` to `_site/css/styles.css`
    eleventyConfig.addPassthroughCopy("src/styles.css");

    return {
        dir: {
            input: "src",
            output: "docs",
        },
    };
};