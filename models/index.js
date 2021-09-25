//import all models
const Client = require("./Client");
const Appointment = require("./Appointment");
const Doctor = require("./Doctor");

//Create associations
Client.hasMany(Appointment, {
  foreignKey: "client_id",
});

Doctor.hasMany(Appointment, {
  foreignKey: "doctor_id",
});

Client.hasMany(Doctor, {
  foreignKey: "client_id",
});
// Client.hasMany(Appointment, {
//   foreignKey: "client_id",
//   onDelete: "SET NULL",
// });

module.exports = { Client, Doctor, Appointment };
