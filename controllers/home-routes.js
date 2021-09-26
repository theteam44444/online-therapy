const router = require("express").Router();

router.get("/", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("homepage");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
