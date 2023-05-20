const chatRoute = require("./chatRoute");
require("express-async-errors");
module.exports = async (router) => {
    chatRoute(router);
};
