const express = require("express");
const weatherController = require("../controllers/weatherController.js");
const weatherRouter = express.Router();

/*weatherRouter.use("/:city", weatherController.getWeatherInCity);
weatherRouter.use("/:city/today", weatherController.getWeatherInCityToday);
weatherRouter.use("/:city/:lastXDay", weatherController.getWeatherInCityLastXday);*/

weatherRouter.use("/getById/:id", weatherController.getByIdWeather);
weatherRouter.use("/get/:city/:date", weatherController.getByCityAndDateWeather);

weatherRouter.use("/get", weatherController.getWeather);
weatherRouter.use("/post", weatherController.postWeather);
weatherRouter.use("/put", weatherController.putWeather);
weatherRouter.use("/delete", weatherController.deleteWeather);

weatherRouter.use("/createPost", weatherController.createPost);
weatherRouter.use("/updatePost", weatherController.createPost);
weatherRouter.use("/deletePost", weatherController.createPost);

module.exports = weatherRouter;