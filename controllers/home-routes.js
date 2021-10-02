const { Appointment, Client } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/client-dashboard");
    return;
  }
  res.render("client-login");
});

router.get("/doctors-login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/doctors-dashboard");
    return;
  }
  res.render("doctors-login");
});

router.get("/register", (req, res) => {
  res.render("client-register");
});

router.get("/about", (req, res) => {
  res.render("about", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
