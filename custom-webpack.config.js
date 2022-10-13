const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = (config, context) => {
  return merge(config, {
    module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            oneOf:[
              {
                resourceQuery: "?lit",
                use: ['lit-scss-loader','extract-loader', "css-loader", "postcss-loader", "sass-loader"],
              },
              {
                use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
              }
            ]
            
          },
      ],
    },
  });
};