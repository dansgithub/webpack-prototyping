const path = require('path');
const markup = require('html-webpack-plugin');
const extract = require('extract-text-webpack-plugin');
const copy = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'source'),
    
    entry: './entry.js',

    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: extract.extract({
                use: [
                    'css-loader',
                    'sass-loader'
                ] 
            })
        }],
    },

    plugins: [
        new markup({
            template: './index.html'
        }),

        new extract({
            filename: './app.css'
        }),

        new copy([{ 
            from: './assets', 
            to: './assets' 
        }])
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
};