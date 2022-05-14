const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please add name "],
        min: [2, "Name have to be more than 2 characters"],
        max: [15, "Name have to be less than 15 characters"]

    },
    userPassword: {
        type: String,
        required: [true, "Please add password"]
    },
    userRole: {
        type: String,
        enum: ["Reception", "Manager", "Owner"],
        required: [true, "Please add role"]
    },

})

module.exports = mongoose.model('User', UserSchema);