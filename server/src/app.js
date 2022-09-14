const express = require("express");
const cors = require("cors");

const database = require("./config/database");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(cors());

// === || Increasing limit of the server || ===
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// === || Connecting to Database || === //
database.connect();

// === || Routes || ===
app.use("/api/user", userRoute);

module.exports = app;
