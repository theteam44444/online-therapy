const router = require("express").Router();
const { Client } = require("../../models");
const auth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.findAll({});
    res.json(clients);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  Client.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    birth_date: req.body.birth_date,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbClientData) => {
      req.session.save(() => {
        req.session.client_id = dbClientData.id;
        req.session.email = dbClientData.email;
        req.session.loggedIn = true;

        res.json(dbClientData);
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  Client.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbClientData) => {
    if (!dbClientData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbClientData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.client_id = dbClientData.id;
      req.session.email = dbClientData.email;
      req.session.loggedIn = true;
      res.json({ client: dbClientData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
