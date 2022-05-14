const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    room: {
        type: String,
        required: [true, "Please add a room"],

    },
})


module.exports = mongoose.model('Guest', GuestSchema);