const express = require("express");

const router = express();

router.get("/", (req, res) => {
  res.send({ ok: true });
});

module.exports = app => app.use("/projects", router);
