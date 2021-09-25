//import all models
const Client = require("./Client");
const Appointment = require("./Appointment");
const Doctor = require("./Doctor");

//Create associations

// One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
Client.hasMany(Doctor, {
  foreignKey: "client_id",
});

// Doctor.hasMany(Client, {
//   foreignKey: "doctor_id",
// });

// Client.hasMany(Appointment, {
//   foreignKey: "client_id",
//   onDelete: "SET NULL",
// });

// // One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
// Appointment.belongsTo(Client, {
//   foreignKey: "client_id",
//   onDelete: "SET NULL",
// });

// Client.hasMany(Appointment, {
//   foreignKey: "client_id",
//   onDelete: "SET NULL",
// });

module.exports = { Client, Doctor, Appointment };
