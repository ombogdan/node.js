const {Router} = require('express');
const router = Router();
const Course = require('../models/course');
router.get("/", (req, res) => {
    res.render('addPizzas', {
        title: "Add Pizzas",
        isAdd: "true",

    });
});

router.post("/",async (req, res) => {
    const courses = new Course(req.body.title, req.body.price, req.body.ingredients, req.body.img);
    await courses.save();
    res.redirect("/courses")

});

module.exports = router;
