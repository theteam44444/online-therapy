async function addAppointmentHandler(event) {
  event.preventDefault();
  const appointment_date = document.querySelector("#appointment-date").value;
  const details = document.querySelector("#details").value;
  const doctorChosen = document.querySelector("#doctor").value;
  const appointment_type = document.querySelector("#appointmentType").value;

  const response = await fetch(`/api/appointments`, {
    method: "POST",
    body: JSON.stringify({
      appointment_date,
      details,
      doctor_name: doctorChosen,
      //   client_id: req.session.client_id,
      appointment_type,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    alert("Appointment has been added");
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".createAppointment")
  .addEventListener("submit", addAppointmentHandler);
