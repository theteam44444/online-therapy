const router = require("express").Router();
const sequelize = require("../config/connection");
const { Appointment, Client } = require("../models");

router.get("/", (req, res) => {
  Appointment.findAll({
    where: {
      // use the ID from the session
      client_id: req.session.client_id,
    },
    // details: ["id", "appointment_date", "doctor_id"],
    include: [
      {
        model: Client,
      },
    ],
  })
    .then((dbPostData) => {
      // serialize data before passing to template
      const cdashboard = dbPostData.map((item) => item.get({ plain: true }));
      res.render("/patient-dashboard", { cdashboard, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
