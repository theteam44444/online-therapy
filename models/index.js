//import all models

const Doctor = require("./Doctor");
const Client = require("./Client");
const Appointment = require("./Appointment");

//Create associations
Client.hasMany(Appointment, {
  foreignKey: "client_id",
});

Doctor.hasMany(Appointment, {
  foreignKey: "doctor_id",
});

// Client.hasMany(Appointment, {
//   foreignKey: "client_id",
//   onDelete: "SET NULL",
// });

module.exports = { Client, Doctor, Appointment };
