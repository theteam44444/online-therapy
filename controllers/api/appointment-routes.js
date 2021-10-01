const router = require("express").Router();
const { Appointment, Doctor } = require("../../models");
const auth = require("../../utils/auth");

router.get("/", auth, async (req, res) => {
  try {
    const data = await Appointment.findAll({
      where: {
        client_id: req.session.client_id,
      },
    });
    if (data) {
      const appointments = data.map((app) => app.get({ plain: true }));
      res.render("client-dashboard", { appointments, loggedIn: true });
      res.json(appointments);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const appointments = await Appointment.create({
      details: req.body.details,
      appointment_date: req.body.appointment_date,
      client_id: req.session.client_id,
      doctor_name: req.body.doctor_name,
      appointment_type: req.body.appointment_type,
    });

    if (appointments) {
      res.json(appointments);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", auth, (req, res) => {
  console.log("PARAMETER,", req.params.id);
  Appointment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbAppointment) => {
      if (!dbAppointment) {
        res.status(404).json({ message: "Error deleting the appointment!" });
        return;
      }
      res.json(dbAppointment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
