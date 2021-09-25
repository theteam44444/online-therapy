const router = require("express").Router();
const { Client, Doctor } = require("../../models");
const auth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    console.log("GET ALL CLIENTS");
    const clients = await Client.findAll({});
    res.json(clients);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("CREATE CLIENT");
    const client = await Client.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      birth_date: req.body.birth_date,
      email: req.body.email,
      password: req.body.password,
    });

    if (client) {
      res.json(client);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
