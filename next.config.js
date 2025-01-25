const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  webpack: (config) => {
    // Add custom file-loader rule
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicPath: "/_next/static/images/", // Path for accessing files
            outputPath: "static/images/", // Path for files in .next directory
          },
        },
      ],
    });

    return config;
  },
};
