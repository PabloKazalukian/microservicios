const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./route"));

server.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

module.exports = server;
