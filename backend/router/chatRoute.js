const processLayer = require("../process_layer/chatProcessing");
module.exports = async (router) => {
    console.log("router", router);
    router.get("/check_route", processLayer.checkRoute);
};
