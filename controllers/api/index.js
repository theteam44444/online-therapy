const router = require("express").Router();

const clientRoutes = require("./client-routes.js");

router.use("/clients", clientRoutes);

module.exports = router;
