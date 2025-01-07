module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles.css");

    return {
        pathPrefix: "/11ty-blog-demo/", // Replace 'your-repo-name' with your actual repository name
        dir: {
            input: "src",
            output: "docs",
        },
    };
};