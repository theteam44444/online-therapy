async function newFormHandler(event) {
    event.preventDefault();

    const dateTime = document.querySelector('input[name="dateTime"]').value;
    const doctorChosen = document.querySelector('input[name="dropdownDoctor"]').value;
    const modeOfAppointment = document.querySelector('input[name="dropdownTypeAppointment"]').value;

    const response = await fetch(`/api/appointments`, {
        method: 'POST',
        body: JSON.stringify({
            dateTime,
            doctorChosen,
            modeOfAppointment
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('createAppointment').addEventListener('click', addAppointmentHandler);