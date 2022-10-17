const { merge, mergeWithRules } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = (config, context) => {
    const c = config;

    c.module.rules[3].oneOf.unshift({
        test: /\.scss$|\.sass$/,
        resourceQuery: '?lit',
        use: [
            'lit-scss-loader',
            'extract-loader',
            'css-loader',
            'postcss-loader',
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass'),
                    // sourceMap: cssSourceMap,
                    sassOptions: {
                        fiber: false,
                        // bootstrap-sass requires a minimum precision of 8
                        precision: 8,
                        includePaths: context.buildOptions.stylePreprocessorOptions.includePaths
                    },
                },
            },
        ],
    });

    /*
    RegExp.prototype.toJSON = RegExp.prototype.toString;
    let data = JSON.stringify(c);
    fs.writeFileSync('student-2.json', data);

    console.log(context);
    */
    return c;
};
