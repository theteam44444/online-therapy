const router = require("express").Router();
const sequelize = require("../config/connection");
const { Appointment, Client } = require("../models");
const auth = require("../utils/auth");

router.get("/", (req, res) => {
  Appointment.findAll({
    where: {
      // use the ID from the session
      email: req.session.email,
    },
    // details: ["id", "appointment_date", "doctor_id"],
  })
    .then((dbPostData) => {
      // serialize data before passing to template
      const appointment = dbPostData.map((item) => item.get({ plain: true }));
      res.render("patient-dashboard", { appointment, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
