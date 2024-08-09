module.exports = function(eleventyConfig) {

    //eleventyConfig.addPassthroughCopy("src/_styles/**/*.css");
    //eleventyConfig.addPassthroughCopy("src/_scripts/**/*.js");
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