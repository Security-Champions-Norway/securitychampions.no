module.exports = function (eleventyConfig) {
  const passthroughDirs = ["src/img", "src/css"];
  passthroughDirs.forEach((dir) => eleventyConfig.addPassthroughCopy(dir));

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
