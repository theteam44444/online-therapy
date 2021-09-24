const router = require("express").Router();
const { Client } = require("../../models");
const auth = require("../../utils/auth");

router.get("/", (req, res) => {
  console.log("GET ALL CLIENTS");
  Client.findAll({})
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
