const jwt = require("jsonwebtoken");

const checkStatusToken = (req, res, next, secret) => {
    const token = req.header("auth-token");
    if (!token) return res.status(400).json({ message: "Access denied" });
    try {
        const verified = jwt.verify(token, process.env.OWNER_SECRET);
        req.userStatus = verified;
        next();

    } catch (error) {
        res.status(400).json({ succsess: false, data: [], message: "Invalid token" })

    }
}

module.exports = checkStatusToken;