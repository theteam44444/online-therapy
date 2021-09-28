const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("homepage");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("client-login");
});

router.get("/register", (req, res) => {
  res.render("client-register");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/patient-dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("patient-dashboard");
});

// router.get("/doctors", (req, res) => {
//   res.render("doctor-dashboard");
// });

module.exports = router;
