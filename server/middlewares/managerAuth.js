const jwt = require("jsonwebtoken");


const checkCouplesToken = async (req, res, next) => {
    const token = req.header("auth-token");
    const userRole = req.header("user-role");
    if (!token || !userRole) {
        res.status(401).json({ message: `Access denied` });
        return;
    }
    try {
        jwt.verify(token, process.env.OWNER_SECRET, (err, res) => {
            if (err) {
                req.userStatus = { message: "Token is not valid" };
            }
            else {
                req.userStatus = { message: "Token is valid" };
            }
            next();

        });
        jwt.verify(token, process.env.MANAGER_SECRET, (err, res) => {
            if (err) {
                req.userStatus = { message: "Token is not valid" };
            }
            else {
                req.userStatus = { message: "Token is valid" };
            }
            next();
        });


    } catch (error) {
        res.status(400).json({ succsess: false, data: [], message: "Server error" })
    }
}

module.exports = checkCouplesToken;