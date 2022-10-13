const { merge, mergeWithRules } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = (config, context) => {

  const c = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: {
          loader: "match",
          options: "replace",
        },
      },
    },
  })(config, {
    module: {
      rules: [
        {
            test:  /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
            oneOf:[
              {
                resourceQuery: "?lit",
                use: ['lit-scss-loader','extract-loader', "css-loader", "postcss-loader", "sass-loader"],
              }
            ]
            
          },
      ],
    },
  });
  console.log(c.module.rules[3]);
  console.log(c.module.rules[4]);
  return c;
};