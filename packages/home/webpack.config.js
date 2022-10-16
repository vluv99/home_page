const { merge, mergeWithRules } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = (config, context) => {
  const c = config;

  c.module.rules[3].oneOf.unshift(        {
    test: /\.scss$|\.sass$/,
    resourceQuery: "?lit",
    use: ['lit-scss-loader','extract-loader', "css-loader", "postcss-loader", "sass-loader"],
  });

  
  /*{
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
        
        {
          test: /\.scss$|\.sass$/,
          resourceQuery: "?lit",
          use: ['lit-scss-loader', 'extract-loader'],
        },
        ...config.module.rules,
      ],
    },
  };*/

  console.log(c.module.rules);
  console.log(c.module.rules[3]);

  return c;
};