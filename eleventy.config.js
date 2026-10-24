export default function(eleventyConfig) {
  // Copy image files
  eleventyConfig.addPassthroughCopy({
   "public": "/"
  });
  // Copy favicon to root of _site
  eleventyConfig.addPassthroughCopy({ "public/images/favicon.ico": "/" });

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