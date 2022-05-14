const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkIfUserExist = require("../middlewares/checkIfUserExist");
const User = require("../models/User");

router.route("/register")
    .post(checkIfUserExist, async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.userPassword, salt);
            req.body.userPassword = hashPassword;
            const user = await User.create(req.body);
            res.status(200).json({ message: "User created successfully", data: user, success: true })
        } catch (err) {
            res.status(400).json({ message: "One of the fields is missed", success: false })
        }
    });

router.route("/logout")
    .get(async (req, res) => {
        try {
            res.clearCookie("jwtLogin");
            res.status(200).json({ message: "User logged out", success: true, data: [] })
        } catch (error) {
            res.status(400).json({ message: "Server error", success: false })
        }

    });


router.route("/login")
    .post(async (req, res) => {
        try {
            const user = await User.findOne({ userName: req.body.userName });
            if (!user) return res.status(301).json({ success: false, message: "User name not found", data: [] });

            const validPass = await bcrypt.compare(req.body.userPassword, user.userPassword);
            console.log(validPass)
            if (!validPass || user.userRole !== req.body.userRole) return res.status(301).json({ success: false, message: "One of the fields isn't valid", data: [] })

            let token;
            if (user.userRole === "Reception") {
                token = jwt.sign({ _id: user._id }, process.env.RECEPTION_SECRET, { expiresIn: 60 * 60 * 24 });
                res.status(200).json({ message: "Recepetion employee Logged in", role: user.userRole, data: token, success: true });

            } else if (user.userRole === "Owner") {
                token = jwt.sign({ _id: user._id }, process.env.OWNER_SECRET, { expiresIn: 60 * 60 * 24 });
                res.status(200).json({ message: "Owner Logged in", role: user.userRole, data: token, success: true })

            } else {
                token = jwt.sign({ _id: user._id }, process.env.MANAGER_SECRET, { expiresIn: 60 * 60 * 24 });
                res.status(200).json({ message: "Manager Logged in", role: user.userRole, data: token, success: true })
            }

        } catch (err) {
            res.status(400).json({ message: "Server error", error: err, success: false })
        }
    });

module.exports = router;