async function addAppointmentClickHandler(event) {
    event.preventDefault();

    const dateTime = document.querySelector('input[name="dateTime"]');

    dateTime.flatpickr({
        enableTime: true,
        minTime: "09:00",
        maxTime: "17:00",
        dateFormat: "F, d Y H:i",
        minDate: "today",
        maxDate:new Date().fp_incr(30),
        "disable": [
            function(date) {
                // return true to disable
                return (date.getDay() === 0 || date.getDay() === 6);
    ​
            }
        ],
    });

    const issueChosen = document.querySelector('input[name="dropdownIssue"]').value;
    const doctorChosen = document.querySelector('input[name="dropdownDoctor"]').value;
    const modeOfAppointment = document.querySelector('input[name="dropdownTypeAppointment"]').value;

    const response = await fetch(`/api/appointments`, {
        method: 'POST',
        body: JSON.stringify({
            dateTime,
            issueChosen,
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
      
document.querySelector('.createAppointment').addEventListener('click', addAppointmentClickHandler);