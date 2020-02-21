const express = require("express");
const helmet = require("helmet");

const resourcesRouter = require("../routers/resources/resourcesRouter.js");
const projectsRouter = require("../routers/projects/projectsRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/resources", resourcesRouter);
// server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "is live!" });
});

module.exports = server;
