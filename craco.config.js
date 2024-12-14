const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  reactScriptsVersion: "react-scripts", 
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
  devServer: {
    port: process.env.PORT || 3036, // Add this line
  },
};