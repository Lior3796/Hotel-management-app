const router = require("express").Router();
const sms = require("../twillo/sms");
const auth = require("../middlewares/auth");
const Room = require("../models/Room");

router.route("/").post((req, res, next) => auth(req, res, next, "owner"))
    .post(async (req, res) => {
        try {
            const rooms = await Room.find({ capacity: 4 });
            const allRooms = await Room.find();
            sms.sendMessage(Math.floor((rooms.length / allRooms.length) * 100));
            res.json({ message: "The message sent by twillo" })

        } catch (err) {

        }

    })

module.exports = router;
