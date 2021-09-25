const router = require("express").Router();

const appointmentRoutes = require("./appointment-routes");
const clientRoutes = require("./client-routes.js");

router.use("/appointment", appointmentRoutes);
router.use("/clients", clientRoutes);

module.exports = router;
