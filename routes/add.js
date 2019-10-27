const {Router} = require('express');
const router = Router();
router.get("/", (req, res) => {
    res.render('addPizzas', {
        title: "Add Pizzas",
        isAdd: "true",

    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/courses")

});

module.exports = router;
