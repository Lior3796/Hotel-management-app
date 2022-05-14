const router = require("express").Router();
const Room = require("../models/Room");
const managerAuth = require("../middlewares/managerAuth");

router.route("/available")
    .get(async (req, res) => {
        try {
            const rooms = await Room.find({ capacity: 4 });
            res.json({ success: true, data: rooms });

        } catch (err) {
            res.json({ err })
        }
    });
router.route("/couples")
    .post(async (req, res) => {
        try {
            const rooms = await Room.find({ capacity: 2 });
            res.json({ status: 200, data: rooms, message: "The rooms with couples in it" });

        } catch (error) {
            res.json({ status: 400, message: "Error", data: [] })
        }

    });



module.exports = router;