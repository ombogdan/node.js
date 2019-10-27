const {Router} = require('express');
const  router = Router();
router.get("/", (req, res) => {
    res.render('addPizzas', {
        title: "Add Pizzas",
        isAdd: "true",

    });
});
module.exports = router;
