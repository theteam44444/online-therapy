const seedClients = require("./client-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedClients();

  process.exit(0);
};

seedAll();
