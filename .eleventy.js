const fs = require("fs");

module.exports = function (eleventyConfig) {
  const passthroughDirs = ["src/img", "src/css", "src/fonts"];
  passthroughDirs.forEach((dir) => eleventyConfig.addPassthroughCopy(dir));

  const getSvgContent = function (file) {
    let relativeFilePath = `./src/img/${file}.svg`;
    let data = fs.readFileSync(relativeFilePath, function (err, contents) {
      if (err) return err;
      return contents;
    });

    return data.toString("utf8");
  };

  eleventyConfig.addShortcode("svg", getSvgContent);

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
