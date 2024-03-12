const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");
const app = express();
var cors = require('cors');
require('dotenv').config()

// CORS
app.use(cors());

// MAP FILES FROM DIRECTORY
app.use(express.static(path.join(__dirname, "dist")));

// PROXY
app.use(
  '/api/admin', 
  createProxyMiddleware({
    target: process.env.FRONT_API_ADMIN,
    changeOrigin: true,
    pathRewrite: {
      '^/api/admin': ''
    },
  })
);

app.use(
  '/api/auth', 
  createProxyMiddleware({
    target: process.env.FRONT_API_AUTH,
    changeOrigin: true,
    pathRewrite: {
      '^/api/auth': ''
    },
  })
);

app.use(
  '/api/user', 
  createProxyMiddleware({
    target: process.env.FRONT_API_USER,
    changeOrigin: true,
    pathRewrite: {
      '^/api/user': ''
    },
  })
);

app.use(
  '/api/info', 
  createProxyMiddleware({
    target: process.env.FRONT_API_INFO,
    changeOrigin: true,
    pathRewrite: {
      '^/api/info': ''
    },
  })
);

app.use(
  '/api/deposit', 
  createProxyMiddleware({
    target: process.env.FRONT_API_DEPOSIT,
    changeOrigin: true,
    pathRewrite: {
      '^/api/deposit': ''
    },
  })
);

app.use(
  '/api/request', 
  createProxyMiddleware({
    target: process.env.FRONT_API_REQUEST,
    changeOrigin: true,
    pathRewrite: {
      '^/api/request': ''
    },
  })
);

app.use(
  '/api/pin', 
  createProxyMiddleware({
    target: process.env.FRONT_API_PIN,
    changeOrigin: true,
    pathRewrite: {
      '^/api/pin': ''
    },
  })
);

app.use(
  '/api/email', 
  createProxyMiddleware({
    target: process.env.FRONT_API_EMAIL,
    changeOrigin: true,
    pathRewrite: {
      '^/api/email': ''
    },
  })
);

app.use(
  '/api/company', 
  createProxyMiddleware({
    target: process.env.FRONT_API_COMPANY,
    changeOrigin: true,
    pathRewrite: {
      '^/api/company': ''
    },
  })
);

app.use('/api/sms', 
  createProxyMiddleware({
    target: process.env.FRONT_API_SMS,
    changeOrigin: true,
    pathRewrite: {
      '^/api/sms': ''
    },
  })
);

app.use(
  '/api/googleAuth', 
  createProxyMiddleware({
    target: process.env.FRONT_API_GOOGLE_AUTH,
    changeOrigin: true,
    pathRewrite: {
      '^/api/googleAuth': ''
    },
  })
);

app.use(
  '/api/peerWallet', 
  createProxyMiddleware({
    target: process.env.FRONT_API_PEER_WALLET,
    changeOrigin: true,
    pathRewrite: {
      '^/api/peerWallet': ''
    },
  })
);


app.use(
  '/api/peerTransfer', 
  createProxyMiddleware({
    target: process.env.FRONT_API_PEER_TRANSFER,
    changeOrigin: true,
    pathRewrite: {
      '^/api/peerTransfer': ''
    },
  })
);

app.use(
  '/api/withdraw', 
  createProxyMiddleware({
    target: process.env.FRONT_API_WITHDRAW,
    changeOrigin: true,
    pathRewrite: {
      '^/api/withdraw': ''
    },
  })
);

app.use(
  '/api/card', 
  createProxyMiddleware({
    target: process.env.FRONT_API_CARD,
    changeOrigin: true,
    pathRewrite: {
      '^/api/card': ''
    },
  })
);

app.use(
  '/api/transaction', 
  createProxyMiddleware({
    target: process.env.FRONT_API_TRANSACTION,
    changeOrigin: true,
    pathRewrite: {
      '^/api/transaction': ''
    },
  })
);

app.use(
  '/api/financial', 
  createProxyMiddleware({
    target: process.env.FRONT_API_FINANCIAL,
    changeOrigin: true,
    pathRewrite: {
      '^/api/financial': ''
    },
  })
);

app.use(
  '/api/kyc', 
  createProxyMiddleware({
    target: process.env.FRONT_API_KYC,
    changeOrigin: true,
    pathRewrite: {
      '^/api/kyc': ''
    },
  })
);

app.use(
  '/api/notification', 
  createProxyMiddleware({
    target: process.env.FRONT_API_NOTIFICATION,
    changeOrigin: true,
    pathRewrite: {
      '^/api/notification': ''
    },
  })
);

app.use(
  '/api/merchant', 
  createProxyMiddleware({
    target: process.env.FRONT_API_MERCHANT,
    changeOrigin: true,
    pathRewrite: {
      '^/api/merchant': ''
    },
  })
);

app.use(
  '/api/checkout', 
  createProxyMiddleware({
    target: process.env.FRONT_API_CHECKOUT,
    changeOrigin: true,
    pathRewrite: {
      '^/api/checkout': ''
    },
  })
);

app.use(
  '/api/support', 
  createProxyMiddleware({
    target: process.env.FRONT_API_SUPPORT,
    changeOrigin: true,
    pathRewrite: {
      '^/api/support': ''
    },
  })
);

app.use(
  '/api/twoFactor', 
  createProxyMiddleware({
    target: process.env.FRONT_API_TWO_FACTOR,
    changeOrigin: true,
    pathRewrite: {
      '^/api/twoFactor': ''
    },
  })
);

app.use(
  createProxyMiddleware('/api/wsNotification', {
    target: process.env.FRONT_API_WS_NOTIFICATION,
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/api/wsNotification': '',
    },
  })
);

app.use(
  createProxyMiddleware('/api/wsChatSupport', {
    target: process.env.FRONT_API_WS_CHAT_SUPPORT,
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/api/wsChatSupport': '',
    },
  })
);

app.use(
  createProxyMiddleware('/api/wsMessaging', {
    target: process.env.FRONT_API_WS_MESSAGING,
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/api/wsMessaging': '',
    },
  })
);

app.use(
  createProxyMiddleware('/api/wsRate', {
    target: process.env.FRONT_API_WS_RATE,
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/api/wsRate': '',
    },
  })
);

// CALLBACK
app.get("/img", (req, res) => {
  res.sendFile(path.join(__dirname, "public", req.originalUrl));
});

// FALLBACK
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.listen(80)