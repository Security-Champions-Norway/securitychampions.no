import fs from "fs";
import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
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
    if (typeof date === "string") return formatDateHuman(new Date(date));

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

  const now = new Date();
  eleventyConfig.addFilter("futureEvents", (events) =>
    events.filter((event) => new Date(event.dateEnd).getTime() >= now.getTime())
  );
  eleventyConfig.addFilter("pastEvents", (events) =>
    events.filter((event) => new Date(event.dateEnd).getTime() < now.getTime())
  );

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

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
}
