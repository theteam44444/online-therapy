const { Doctor } = require("../models");

const doctorData = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "jsarmiento@test.ca",
    password: "password",
    phoneNumber: "4161234567",
  },
  {
    first_name: "Dave",
    last_name: "Malan",
    email: "dmalan@test.ca",
    password: "password",
    phoneNumber: "4160007896",
  },
  {
    first_name: "Sandra",
    last_name: "Smith",
    email: "ssmithe@test.ca",
    password: "password",
    phoneNumber: "4160006055",
  },
  {
    first_name: "Andy",
    last_name: "Cole",
    email: "acole@test.ca",
    password: "password",
    phoneNumber: "4160006521",
  },
  {
    first_name: "Sam",
    last_name: "Curran",
    email: "scurran@test.ca",
    password: "password",
    phoneNumber: "4160002344",
  },
];

const seedDoctors = () =>
  Doctor.bulkCreate(doctorData, { individualHooks: true });

module.exports = seedDoctors;
