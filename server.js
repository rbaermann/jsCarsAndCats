const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/cars', (req, res) => {
    res.render('cars');
});

app.get('/cars/new', (req, res) => {
    res.render('form');
});

app.get('/cats', (req, res) => {
    res.render('cats');
});

app.get('/tymber', (req, res) => {
    let dict = {
        name : "Tymber",
        favFood : "Salmon",
        age : 4,
        sleep : ["On your legs", "Top of tower", "On clothes"]
    };
    res.render('details', {cat : dict});
});

app.get('/aspen', (req, res) => {
    let dict = {
        name : "Aspen",
        favFood : "Chicken",
        age : 1,
        sleep : ["Lower part of tower", "Under the bed", "On your chest"]
    };
    res.render('details', {cat : dict});
});

app.get('/ankou', (req, res) => {
    let dict = {
        name : "Ankou",
        favFood : "Bonito Flakes",
        age : 2,
        sleep : ["On your lap", "On your face", "Very top of tower"]
    };
    res.render('details', {cat : dict});
});



app.listen(8000, () => console.log("listening on port 8000"));
