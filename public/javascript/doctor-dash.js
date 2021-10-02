async function doctorDashboardHandler(event) {
    event.preventDefault();
    const listOfPatients = document.querySelector("#client-list").value;
    const appointmentList = document.querySelector("#applintment-list").value;
    const doctorsList = document.querySelector("#doctors-list").value;
  
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