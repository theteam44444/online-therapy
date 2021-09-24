//import all models
const Client = require("./Client");
const Appointment = require("./Appointment");
const Doctor = require("./Doctor");

//Create associations
Client.hasMany(Doctor, {
  foreignKey: "client_id",
});
module.exports = { Client, Appointment, Doctor };
