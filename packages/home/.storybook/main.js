const rootMain = require('../../../.storybook/main');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = {
    ...rootMain,

    stories: [
        ...rootMain.stories,
        '../src/app/**/*.stories.mdx',
        '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [...rootMain.addons],
    core: { ...rootMain.core, builder: 'webpack5' },
    webpackFinal: async (config, { configType }) => {
        // apply any global webpack configs that might have been specified in .storybook/main.js
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, { configType });
        }
/*
        console.log(config);

        RegExp.prototype.toJSON = RegExp.prototype.toString;
        let data = JSON.stringify(config);
        fs.writeFileSync('student-2.json', data);
*/
        const sassLoader = {
            loader: 'sass-loader',
            options: {
                implementation: require('sass'),
                // sourceMap: cssSourceMap,
                sassOptions: {
                    fiber: false,
                    // bootstrap-sass requires a minimum precision of 8
                    precision: 8,
                    includePaths: ["packages/home/src/"]
                },
            },
        }

        config.plugins.push(new MiniCssExtractPlugin());

        // add your own webpack tweaks if needed
        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            oneOf:[
              {
                resourceQuery: "?lit",
                use: ['lit-scss-loader','extract-loader', "css-loader", "postcss-loader", sassLoader],
              },
              {
                use: [stylesHandler, "css-loader", "postcss-loader", sassLoader],
              }
            ]
            
          },);


        return config;
    },
};
