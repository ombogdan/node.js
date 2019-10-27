const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");

const app = express();
const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render('index', {
        title: "Home page",
        isHome: "true",
    });
});

app.get("/courses", (req, res) => {
    res.render('courses', {
        title: "Courses",
        isCourses: "true",


    });
});

app.get("/add", (req, res) => {
    res.render('addPizzas', {
        title: "Add Pizzas",
        isAdd: "true",

    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
