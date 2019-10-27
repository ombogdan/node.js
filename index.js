const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");
const homeRouts = require('./routes/home');
const coursesRouts = require('./routes/courses');
const addRouts = require('./routes/add');

const app = express();
const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));


app.use("/", homeRouts);
app.use("/courses",coursesRouts);
app.use("/add", addRouts);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
