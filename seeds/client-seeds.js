const { Client } = require("../models");

const clientData = [
  {
    first_name: "Jay",
    last_name: "Sarmiento",
    address: "East York, ON",
    birth_date: "1987-10-17",
    email: "jsarmiento@test.ca",
    password: "password",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    address: "North York, ON",
    birth_date: "2000-01-10",
    email: "jdoe@test.ca",
    password: "password",
  },
  {
    first_name: "Charles",
    last_name: "Dawkins",
    address: "Scarborough, ON",
    birth_date: "1978-12-06",
    email: "theteam44444@gmail.com",
    password: "password",
  },
];

const seedClients = () =>
  Client.bulkCreate(clientData, { individualHooks: true });

module.exports = seedClients;
