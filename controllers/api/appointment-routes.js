const router = require("express").Router();
const { Appointment } = require("../../models/Appointment");

router.get("/", (req, res) => {
  console.log("GET ALL APPOINTMENT");
  Appointment.findAll({})
    .then((appointmentData) => res.json(appointmentData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
