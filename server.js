const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// loading env
dotenv.config({ path: "server/config/config.env" })

const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./server/config/db");
const auth = require("./server/middlewares/auth");
const managerAuth = require("./server/middlewares/managerAuth");

const rooms = require("./server/routes/rooms");
const guests = require("./server/routes/guests");
const sms = require("./server/routes/status");
const user = require("./server/routes/user");

// connect to DB
connectDB();


const app = express();

// body-parser
app.use(express.json());
app.use(cors());




// routing
app.use("/rooms", rooms);
app.use("/guests", guests);
app.use("/status", sms);
app.use("/user", user);





if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}


const PORT = process.env.PORT;

const server = app.listen(PORT, () => console.log(`We live in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`.green.bold));

// handle unhandle errors
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold)

    server.close(() => process.exit(1));
})