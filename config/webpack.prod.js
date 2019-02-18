var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    // disable: process.env.NODE_ENV === "development"
});

const htmlWebpack = new htmlWebpackPlugin({
    template: 'index.html',
    hash: true
});

// var publicPath = "/dist/";
var publicPath = "//static.flowclub.com/resources/";

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: publicPath,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            // 'postcss': 'style-loader!css-loader!postcss-loader!sass-loader'
          },
          // postcss: [require('autoprefixer')({ browsers: ['last 10 versions', '> 1%'] })]
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: '[hash].[ext]?imageMogr2/format/webp/blur/1x0/quality/95'
        }
      },
      {
        test: /\.scss|.css$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }, {
                loader: 'postcss-loader'
            }],
            // use style-loader in development
            // fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [extractSass, htmlWebpack],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'styles': path.resolve(__dirname, '../src/assets/style/'),
      'images': path.resolve(__dirname, '../src/assets/images/'),
      'views': path.resolve(__dirname, '../src/views/')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
