const withSass = require("@zeit/next-sass");
const webpack = require("webpack");

module.exports = withSass({
target: "serverless",
  env: {
    DOMAIN: process.env.DOMAIN,
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT_URI: process.env.REDIRECT_URI
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  webpack: config => {
    return config;
  }
});
