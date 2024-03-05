const mongoose = require("mongoose");

// Connect to MongoDB
const mongoURL =
    "mongodb+srv://PLACEHOLDER:REDACTED@cluster0.czgrzdd.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = (url) => {
    return mongoose
        .connect(mongoURL
        )
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
