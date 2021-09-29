const router = require("express").Router();
const { Appointment, Doctor } = require("../../models");
const auth = require("../../utils/auth");

// router.get("/", (req, res) => {
//   console.log("GET ALL APPOINTMENT");
//   Appointment.findAll({
//     include: [
//       {
//         model: Doctor,
//       },
//     ],
//   })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// });

router.get("/", async (req, res) => {
  try {
    console.log("GET ALL APPOINTMENT");
    const appointments = await Appointment.findAll({});
    res.json(appointments);

  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("CREATE APPOINTMENT");
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

module.exports = router;
