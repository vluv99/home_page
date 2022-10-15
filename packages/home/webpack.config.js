const { merge, mergeWithRules } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = (config, context) => {

  const c = {
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
        ...config.module.rules,
        {
          test: /\.scss$|\.sass$/,
          resourceQuery: "?lit",
          use: ['lit-scss-loader'],
        },
        
      ],
    },
  };

  console.log(c.module.rules);
  console.log(c.module.rules[3]);

  return c;
};