const router = require("express").Router();
const Guest = require("../models/Guest");
const Entry = require("../models/Entry");
const Room = require("../models/Room");

router.route("/families")
    .get(async (req, res) => {
        try {
            let familesRoom = await Room.find().where("capacity").gt(2);
            console.log(familesRoom);
            familesRoom = familesRoom.map(room => room.number);
            const guests = await Guest.find().where("room").equals(familesRoom).select(["name", "room"]);
            res.json({ status: 200, data: guests });

        } catch (err) {
            res.json({ err });
        }

    })
router.route("/addGuest")
    .post(async (req, res) => {
        try {
            const room = await Room.findOne({ room: req.body.room });
            await Guest.create(req.body); // filling the room with the guest
            const entry = await Entry.create({ room: req.body.room });
            await room.updateOne({ capacity: room.capacity - 1 }, { new: true });

            room.save();
            res.json({ status: 200, data: { entry }, room });
        } catch (error) {
            res.json({ error })
        }
    });



module.exports = router;