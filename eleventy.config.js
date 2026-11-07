import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  // If using pathprefix (github pages), modifies all file links to use the correct url
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Copy image files
  eleventyConfig.addPassthroughCopy({
   "public": "/"
  });

  eleventyConfig.addWatchTarget("./src/**");
  eleventyConfig.addWatchTarget("./_raw_data/**");

  // Required for WSL to watch files properly
  eleventyConfig.setChokidarConfig({
    usePolling: true,
    interval: 500,
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}