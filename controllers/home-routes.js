const { Appointment, Client } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/patient-dashboard");
    // res.redirect("/");
    return;
  }
  // res.render("client-login");
  res.render("homepage");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("client-login");
});

router.get("/doctors-login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("doctors-login");
});

router.get("/register", (req, res) => {
  res.render("client-register");
});

router.get("/about", (req, res) => {
  res.render("about");
});

// router.get("/patient-dashboard", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
//   res.render("patient-dashboard");
// });

router.get("/patient-dashboard", async (req, res) => {
  const appointments = await Appointment.findAll({

    attributes: [
      'id',
      'details',
      'doctor_name',
      'appointment_date',
      'appointment_type'
    ]
  })
  .then(dbAppointmentData => {
    const appointments = dbAppointmentData.map(appointment => appointment.get({ plain: true }));

    // console.log("appointments", appointments);
    res.render("patient-dashboard", 
    {appointments});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  console.log("appointments", appointments);
 });
// router.get("/doctors", (req, res) => {
//   res.render("doctor-dashboard");
// });
//  get the logged in client information
router.get("/patient-dashboard", async (req, res) => {
  const client = await Client.findOne({
     where: {
    email: req.session.email

     },
    attributes: [
      'first_name',
      'last_name',
      'address',
      'birth_date',
      'email'
    ]
  })
  .then(dbClientData => {
    const client = dbClientData.get({ plain: true });
    console.log("client", client);
    res.render("patient-dashboard", 
    {client});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  
});

// router.get("/patient-dashboard", (req, res) => {
//   Client.findOne({
//      where: {
//     email: req.session.email

//      },
//     attributes: [
//       'first_name',
//       'last_name',
//       'address',
//       'birth_date',
//       'email'
//     ]
//   })
//   .then(dbClientData => {
//     const client = dbClientData.get({ plain: true });
//     console.log("client", client);
//     res.render("patient-dashboard", 
//     {client});
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
  
// });
module.exports = router;
