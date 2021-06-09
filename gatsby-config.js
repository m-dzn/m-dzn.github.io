const { config } = require("./config");
const plugins = require("./gatsby-plugins");

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins,
};
