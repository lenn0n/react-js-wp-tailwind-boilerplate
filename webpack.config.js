const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[fullhash].js?v=" + new Date().getTime(),
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv({
      path: "./.env"
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@helpers': path.resolve(__dirname, 'src/utils/helpers'),
      '@constants': path.resolve(__dirname, 'src/utils/constants'),
      '@services': path.resolve(__dirname, 'src/utils/services'),
      '@modals': path.resolve(__dirname, 'src/components/Modal'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
        type: 'asset/resource'
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/api/admin': {
        target: `http://127.0.0.1:35219/api`,
        pathRewrite: { '^/api/admin': '' },
      },
      '/api/wsNotification': {
        target: `http://127.0.0.1:35226`,
        ws: true,
        pathRewrite: { '^/api/wsNotification': '' },
      },
    },
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 300,
  }
};