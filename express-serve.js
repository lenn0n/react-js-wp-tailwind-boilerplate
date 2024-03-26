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