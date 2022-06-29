const express = require("express");
const mongoose = require("mongoose");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const weatherRouter = require("./routes/weatherRouter");
const homeRouter = require("./routes/homeRouter");

/*С соблюдение паттернa MVC реализовать API для получения погоды в разных городах за сегодня или прошлые даты*/

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.use("/weather", weatherRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

mongoose.connect("mongodb+srv://Sem:PASSworld93@cluster0.p9gaj.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});