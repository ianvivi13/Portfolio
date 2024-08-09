const shortcodes = require("./src/_includes/components/shortcode.js");

module.exports = function(eleventyConfig) {
    for (let shortcodesKey in shortcodes) {
        eleventyConfig.addShortcode(shortcodesKey, shortcodes[shortcodesKey]);
    }

    eleventyConfig.addPassthroughCopy("src/_images/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/_images/**/*.png");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts"
        }
    }
};