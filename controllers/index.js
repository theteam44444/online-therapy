const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const patientdashboardRoutes = require('./patient-dashboard-routes.js');



router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use('/patient-dashboard', patientdashboardRoutes);

module.exports = router;
