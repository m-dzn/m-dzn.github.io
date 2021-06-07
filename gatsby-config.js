const plugins = require("./gatsby-config.plugins");

const siteMetadata = {
  title: "Mechanism Design",
  author: {
    name: `Kyeongho Yang`,
    summary: `요약`,
  },
  description: `한 줄 설명`,
  siteUrl: `https://jamongjelly.github.io`,
};

module.exports = {
  pathPrefix: "",
  siteMetadata,
  plugins,
};
