const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
    room: {
        type: String,
        required: [true, "Please add a room number"],

    },
    time: {
        type: Date,
        default: Date.now(),
    },

})

module.exports = mongoose.model('Entry', EntrySchema);