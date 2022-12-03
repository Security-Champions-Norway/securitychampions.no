module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "_site",
            data: "_data",
        },
        templateFormats: ["html", "njk", "md", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
}