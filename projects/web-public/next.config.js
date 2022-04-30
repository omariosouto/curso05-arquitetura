const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@alura/utils",
  "@alura/design-system",
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
