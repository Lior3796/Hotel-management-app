const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    number: {
        type: String,
        required: [true, "Please add a room number"],
    },
    capacity: {
        type: Number,
        required: [true, "Please add the room capacity"]
    },


})

module.exports = mongoose.model('Room', RoomSchema);