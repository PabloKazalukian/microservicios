const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://character:8001",
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://film:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planet:8003",
    changeOrigin: true,
  })
);

app.use(express.json());

app.listen(8000);
