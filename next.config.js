const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    // Optimize Webpack configuration
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: Infinity,
        automaticNameDelimiter: ".",
        name: "chunk",
      };
    }

    // Use caching
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    };

    return config;
  },
  // Add other configurations if needed
});
