var webpack = require("webpack");
module.exports = {
    entry: './straw-hat.js',
    output: {
        filename: './public/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};