var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Us" });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Us" });
});

/* GET blog page. */
router.get("/blog", function (req, res, next) {
  res.render("blog", { title: "Blog" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

module.exports = router;
