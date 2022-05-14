const User = require("../models/User");
const checkIfUserExist = async (req, res, next) => {
    const userExist = await User.findOne({ userName: req.body.userName });
    if (userExist) {
        res.status(301).json({ message: "Cannot create user with name that already have in the system", success: false, data: [] });
        return;
    }
    next();
}
module.exports = checkIfUserExist;