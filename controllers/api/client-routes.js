const router = require("express").Router();
const { Client } = require("../../models");
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

// login route
router.post('/login', async (req, res) => {
  try {
  const dbClientData = await Client.findOne({
    where:  {
      email: req.params.email
    }
    
  });
  console.log("email is ", email)
  if(!email) {
      res.status(404).json({ message: 'Wrong email/password'});
      return;
  }
  const validPassword = dbClientData.checkPassword(req.body.password);
  if(!validPassword) {
      res.status(404).json({message: 'Wrong email/ password'});
      return;
  }
  req.session.save(() => {
      req.session.user_id = dbClientData.id;
      req.session.email = dbClientData.email;
      req.session.loggedIn = true;
      res.json({user: dbClientData, message: 'You are now logged in!'});
  });
  }
  catch(error) {
      res.status(500).json(error);
  }
});




module.exports = router;
