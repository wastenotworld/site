
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;
  
  config.addFilter("debug", function(value) {
    return util.inspect(value, {compact: false})
   });


  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  config.addPassthroughCopy("./src/site/manifest.json");

  // service workers
  if (env !== undefined) {
    // config.addPlugin(pluginPWA);
  }

  // Add some utility filters
  config.addFilter("squash", require("./src/utils/filters/squash.js") );
  config.addFilter("dateDisplay", require("./src/utils/filters/date.js") );

  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  // config.addPassthroughCopy({
  //   './static': '.'
  // })

  // config.addPassthroughCopy({
  //   bundle: 'assets'
  // })

  config.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  config.addFilter("markdownify", function(value) {
    const md = new markdownIt(options)
    return md.render(value)
  })

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // minify the html output
  config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });

  config.addNunjucksTag('qtys', (nunjucksEngine) => {
    return new function() {
      this.tags = ["qtys"];

      this.parse = function(parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        return new nodes.CallExtensionAsync(this, "run", args);
      };

      this.run = function(context, myStringArg, callback) {
        var ret
        switch (myStringArg) {
          case 'mixed':
            ret = new nunjucksEngine.runtime.SafeString('Mixed miniumums')
            break;
          case 'high':
            ret = new nunjucksEngine.runtime.SafeString('High miniumums')
            break;
          default:
            ret = new nunjucksEngine.runtime.SafeString('Low Miniumums')
            break;
          
        }
        callback(null, ret);
      };
    }()
  })

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/downloads");

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: `_data`
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
