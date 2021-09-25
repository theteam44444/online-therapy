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
    first_name: "Jane",
    last_name: "Doe",
    email: "jdoe@test.ca",
    password: "password",
    phoneNumber: "4160007896",
  },
];

const seedDoctors = () =>
  Doctor.bulkCreate(doctorData, { individualHooks: true });

module.exports = seedDoctors;
