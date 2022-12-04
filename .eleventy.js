const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");

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

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  function formatDateHuman(date) {
    if (!date) return "";

    const monthNames = [
      "januar",
      "februar",
      "mars",
      "april",
      "mai",
      "juni",
      "juli",
      "august",
      "september",
      "oktober",
      "november",
      "desember",
    ];
    return `${date.getDate()}. ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
  }

  eleventyConfig.addFilter("formatDateISO", (date) =>
    date ? date.toISOString().substring(0, 10) : ""
  );
  eleventyConfig.addFilter("formatDateHuman", formatDateHuman);

  eleventyConfig.addPlugin(pluginRss);

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
