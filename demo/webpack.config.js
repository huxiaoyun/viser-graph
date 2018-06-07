const path = require('path');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.config')

module.exports = {
  context: __dirname,
  devtool: '#inline-source-map',
  entry: ['./index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/build/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.vue'],
    alias: {
      viser: path.resolve(__dirname, '../packages/viser/src/index'),
      'viser-graph-react': path.resolve(__dirname, '../packages/viser-graph-react/src/index'),
      'viser-graph-vue': path.resolve(__dirname, '../packages/viser-graph-vue/src/index'),
      'viser-graph-ng': path.resolve(__dirname, '../packages/viser-graph-ng/src/index'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: [path.resolve(__dirname, '../packages/viser-graph-ng/node_modules'), 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
};
