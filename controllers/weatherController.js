const Weather = require("../models/weather.js");

/*req.params.name
req.query.name
req.body.name*/

exports.createPost = function (request, response) {
    response.render("createPost.hbs");
}
exports.updatePost = function (request, response) {
    response.render("createPost.hbs");
}
exports.deletePost = function (request, response) {
    response.render("createPost.hbs");
}

exports.getByIdWeather = function (request, response) {
    const id = request.params.id;
    Weather.findOne({_id: ObjectID(id)}, function (err, weather) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(weather);
    })
}

exports.getByCityAndDateWeather = function (request, response) {
    const city = request.params.city;
    const date = request.params.date;
    Weather.findOne({city: city, date: date}, function (err, weather) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(weather);
    })
}

exports.getWeather = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const city = request.body.city;
    const date = request.body.date;
    Weather.findOne({city: city, date: date}, function (err, weather) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(weather);
    })
}

exports.postWeather = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const city = request.body.city;
    const date = request.body.date;
    const temperatureC = request.body.temperatureC;
    const temperatureF = request.body.temperatureF;

    const weather = new Weather({city: city,date: date,temperatureC: temperatureC,temperatureF: temperatureF});
    console.log(weather);

    weather.save(function(err){
        if(err)
        {
            console.log(err);
            return response.sendStatus(400);
        }
        response.sendStatus(200);
    });
}

exports.putWeather = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const id = request.body.id;
    const city = request.body.city;
    const date = request.body.date;
    const temperatureC = request.body.temperatureC;
    const temperatureF = request.body.temperatureF;

    Weather.updateOne(
        {_id: ObjectID(id)},
        {$set: {city: city,date: date,temperatureC: temperatureC,temperatureF: temperatureF}},
        function (err, result) {
            if (err){
                console.log(err);
                return response.sendStatus(500);
            }
            return response.sendStatus(200);
        }
    );

}

exports.deleteWeather = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const id = request.body.id;

    Weather.deleteOne(
        {_id: ObjectID(id)},
        function (err, result) {
            if (err){
                console.log(err);
                return response.sendStatus(500);
            }
            return response.sendStatus(200);
        }
    )
}