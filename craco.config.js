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
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        webpackConfig.devtool = false; // Disable source maps in production
      }
      return webpackConfig;
    },
  },
};