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
        target: `http://192.168.1.122:35219/api`,
        pathRewrite: { '^/api/admin': '' },
      },
      '/api/auth': {
        target: `http://192.168.1.122:35204/api`,
        pathRewrite: { '^/api/auth': '' },
      },
      '/api/user': {
        target: `http://192.168.1.122:35203/api`,
        pathRewrite: { '^/api/user': '' },
      },
      '/api/info': {
        target: `http://192.168.1.122:35205/api`,
        pathRewrite: { '^/api/info': '' },
      },
      '/api/deposit': {
        target: `http://192.168.1.122:35207/api`,
        pathRewrite: { '^/api/deposit': '' },
      },
      '/api/request': {
        target: `http://192.168.1.122:35208/api`,
        pathRewrite: { '^/api/request': '' },
      },
      '/api/pin': {
        target: `http://192.168.1.122:35209/api`,
        pathRewrite: { '^/api/pin': '' },
      },
      '/api/email': {
        target: `http://192.168.1.122:35210/api`,
        pathRewrite: { '^/api/email': '' },
      },
      '/api/company': {
        target: `http://192.168.1.122:35213/api`,
        pathRewrite: { '^/api/company': '' },
      },
      '/api/sms': {
        target: `http://192.168.1.122:35212/api`,
        pathRewrite: { '^/api/sms': '' },
      },
      '/api/googleAuth': {
        target: `http://192.168.1.122:35211/api`,
        pathRewrite: { '^/api/googleAuth': '' },
      },
      '/api/peerWallet': {
        target: `http://192.168.1.127:40300/api`,
        pathRewrite: { '^/api/peerWallet': '' },
      },
      '/api/peerTransfer': {
        target: `http://192.168.1.122:40300/api`,
        pathRewrite: { '^/api/peerTransfer': '' },
      },
      '/api/withdraw': {
        target: `http://192.168.1.127:40000/api`,
        pathRewrite: { '^/api/withdraw': '' },
      },
      '/api/card': {
        target: `http://192.168.1.122:35214/api`,
        pathRewrite: { '^/api/card': '' },
      },
      '/api/transaction': {
        target: `http://192.168.1.122:35206/api`,
        pathRewrite: { '^/api/transaction': '' },
      },
      '/api/financial': {
        target: `http://192.168.1.127:40100/api`,
        pathRewrite: { '^/api/financial': '' },
      },
      '/api/kyc': {
        target: `http://192.168.1.127:40200/api`,
        pathRewrite: { '^/api/kyc': '' },
      },
      '/api/notification': {
        target: `http://192.168.1.122:35216/api`,
        pathRewrite: { '^/api/notification': '' },
      },
      '/api/merchant': {
        target: `http://192.168.1.127:40400/api`,
        pathRewrite: { '^/api/merchant': '' },
      },
      '/api/checkout': {
        target: `http://192.168.1.127:40500/api`,
        pathRewrite: { '^/api/checkout': '' },
        changeOrigin: true,
      },
      '/api/support': {
        target: `http://192.168.1.122:35217/api`,
        pathRewrite: { '^/api/support': '' },
      },
      '/api/twoFactor': {
        target: `http://192.168.1.122:35215/api`,
        pathRewrite: { '^/api/twoFactor': '' },
      },
      '/api/wsNotification': {
        target: `http://192.168.1.122:35226`,
        ws: true,
        pathRewrite: { '^/api/wsNotification': '' },
      },
      '/api/wsChatSupport': {
        target: `http://192.168.1.122:35227`,
        ws: true,
        pathRewrite: { '^/api/wsChatSupport': '' },
      },
      '/api/wsMessaging': {
        target: `http://192.168.1.122:35228`,
        ws: true,
        pathRewrite: { '^/api/wsMessaging': '' },
      },
      '/api/wsRate': {
        target: `http://192.168.1.122:35218`,
        ws: true,
        pathRewrite: { '^/api/wsRate': '' },
      },
    },
  },
  // watchOptions: {
  //   poll: 1000,
  //   aggregateTimeout: 300,
  // }
};