const router = require("express").Router();
const sequelize = require("../config/connection");
const { Appointment, Client } = require("../models");
const auth = require("../utils/auth");

router.get("/", auth, (req, res) => {
  Appointment.findAll({
    where: {
      // use the ID from the session
      client_id: req.session.client_id,
    },
  })
    .then((dbAppointment) => {
      // serialize data before passing to template
      const appointment = dbAppointment.map((item) =>
        item.get({ plain: true })
      );
      res.render("client-dashboard", { appointment, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
