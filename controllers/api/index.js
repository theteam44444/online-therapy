const router = require("express").Router();

const appointmentRoutes = require("./appointment-routes");

router.use("/appointment", appointmentRoutes);

module.exports = router;
