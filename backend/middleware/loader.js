const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const apiRouter = require("../router/route");
module.exports = async (app) => {
    app.use(helmet());

    // using bodyParser to parse JSON bodies into JS objects
    app.use(bodyParser.json());

    // enabling CORS for all requests
    app.use(cors());

    // adding morgan to log HTTP requests
    app.use(morgan("combined"));

    const router = express.Router();
    app.get("/", (req, res) => {
        res.send({ response: "Your Application is Healthy" });
    });

    app.use("/chat", router);
    await apiRouter(router);

    app.use((req, res, next) => {
        throw new Error("URL not found");
    });
};
