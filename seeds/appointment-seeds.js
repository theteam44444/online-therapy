const { Appointment } = require("../models");

const appointmentData = [
  {
    details: "Massage Therapist",
    appointment_date: "2021-09-30",
    client_id: 1,
    doctor_id: 1,
    appointment_type: "In-Person",
  },
  {
    details: "Chiropractic Therapy Clinic",
    appointment_date: "2021-12-25",
    client_id: 1,
    doctor_id: 1,
    appointment_type: "In-Person",
  },
];

const appointmentSeeds = () => Appointment.bulkCreate(appointmentData);

module.exports = appointmentSeeds;
