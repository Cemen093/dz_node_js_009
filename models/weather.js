const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WeatherScheme = new Schema({
    city: String,
    date: Date,
    temperatureC: Number,
    temperatureF: Number
});
module.exports = mongoose.model("Weather", WeatherScheme);