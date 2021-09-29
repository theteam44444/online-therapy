async function addAppointmentHandler(event) {
  event.preventDefault();
  const appointment_date = document.querySelector("#appointment-date").value;
  // dateTime.flatpickr("#dateTime",{
  //   enableTime: true,
  //   minTime: "09:00",
  //   maxTime: "17:00",
  //   dateFormat: "F, d Y H:i",
  //   minDate: "today",
  //   maxDate: new Date().fp_incr(30),
  //   // disable: [
  //   //     function(date) {
  //   //         // return true to disable
  //   //         return (date.getDay() === 0 || date.getDay() === 6);​
  //   //     }
  //   // ],
  // });

  // return dateTime;
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

// async function getAppointments() {
//   console.log("getAppointments");

//   const response = await fetch(`/api/appointments`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     // document.location.replace("/dashboard");
//     alert("Appointment retrieved successfully");
//   } else {
//     alert(response.statusText);
//   }
// }
// document
//   .querySelector("#createAppointment")
//   .addEventListener("onload", getAppointments);

document
  .querySelector(".createAppointment")
  .addEventListener("submit", addAppointmentHandler);
