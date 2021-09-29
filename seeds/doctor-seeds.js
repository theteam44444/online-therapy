const { Doctor } = require("../models");

const doctorData = [
  {
    first_name: "Stephen",
    last_name: "Strange",
    email: "jsarmiento@test.ca",
    password: "password",
    phoneNumber: "4161234567",
  },
  {
    first_name: "Count",
    last_name: "Dooku",
    email: "dmalan@test.ca",
    password: "password",
    phoneNumber: "4160007896",
  },
  {
    first_name: "King",
    last_name: "Shultz",
    email: "ssmithe@test.ca",
    password: "password",
    phoneNumber: "4160006055",
  },
  {
    first_name: "Angela",
    last_name: "Ziegler",
    email: "acole@test.ca",
    password: "password",
    phoneNumber: "4160006521",
  },
  {
    first_name: "Gordon",
    last_name: "Freeman",
    email: "scurran@test.ca",
    password: "password",
    phoneNumber: "4160002344",
  },
  {
    first_name: "Alexa",
    last_name: "Amazon",
    email: "awee@test.ca",
    password: "password",
    phoneNumber: "4147849440",
  },


];

const seedDoctors = () =>
  Doctor.bulkCreate(doctorData, { individualHooks: true });

module.exports = seedDoctors;
