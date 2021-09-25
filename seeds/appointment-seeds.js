const { Appointment } = require("../models");

const appointmentData = [
  {
    details: "Massage Therapist",
    appointment_date: "2021-09-30",
    client_id: 1,
    doctor_id: 1,
  },
  {
    details: "Chiropractic Therapy Clinic",
    appointment_date: "2021-12-25",
    client_id: 1,
    doctor_id: 1,
  },
];

const appointmentSeeds = () => Appointment.bulkCreate(appointmentData);

module.exports = appointmentSeeds;
