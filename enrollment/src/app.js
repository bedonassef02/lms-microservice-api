const express = require("express");
require("./config/db.confg");
const app = express();

const morgan = require("morgan");

app.use(express.json());

app.use(morgan("dev"));

app.use("/enrollment", require("./routes/enrollment.router"));

module.exports = app;
