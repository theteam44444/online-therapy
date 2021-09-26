const seedClients = require("./client-seeds");
const seedDoctors = require("./doctor-seeds");
const seedAppointment = require("./appointment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedClients();
  await seedDoctors();
  await seedAppointment();

  process.exit(0);
};

seedAll();
