const router = require("express").Router();

router.get("/", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  //res.render("homepage");
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

// router.get("/doctors", (req, res) => {
//   res.render("doctor-dashboard");
// });

module.exports = router;
