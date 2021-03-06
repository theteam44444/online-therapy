const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const patientdashboardRoutes = require("./client-dashboard-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/client-dashboard", patientdashboardRoutes);

module.exports = router;
