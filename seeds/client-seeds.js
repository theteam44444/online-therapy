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
    email: "doe@gmail.com",
    password: "password",
  },
  {
    first_name: "Charles",
    last_name: "Dawkins",
    address: "Scarborough, ON",
    birth_date: "1978-12-06",
    email: "dawkins@gmail.com",
    password: "password",
  },
  {
    first_name: "James",
    last_name: "Bond",
    address: "Toronto, ON",
    birth_date: "1968-07-23",
    email: "bond@gmail.com",
    password: "password",
  },
  {
    first_name: "Tony",
    last_name: "Stark",
    address: "Brooklyn, ON",
    birth_date: "1992-10-15",
    email: "stark@gmail.com",
    password: "password",
  },
  {
    first_name: "Clark",
    last_name: "Kent",
    address: "Storyville, ON",
    birth_date: "1965-01-22",
    email: "kent@gmail.com",
    password: "password",
  },
];

const seedClients = () =>
  Client.bulkCreate(clientData, { individualHooks: true });

module.exports = seedClients;
