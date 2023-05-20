const express = require("express");
const app = express();

require("./middleware/loader")(app);

module.exports = app;
