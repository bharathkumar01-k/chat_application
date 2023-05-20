const checkRoute = async (req, res) => {
    data = {};
    data = { name: "chat-app", version: 1 };
    res.status(200).json(data);
};

exports.checkRoute = checkRoute;
