const router = require("express").Router();

const appointmentRoutes = require("./appointment-routes");
const clientRoutes = require("./client-routes");
const doctorRoutes = require("./doctor-routes");

router.use("/appointments", appointmentRoutes);
router.use("/clients", clientRoutes);
router.use("/doctors", doctorRoutes);

module.exports = router;
