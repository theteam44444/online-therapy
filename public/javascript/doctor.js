async function loginDoctorHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector("#email-doctor").value.trim();
    const password = document.querySelector("#password-doctor").value.trim();
    console.log('login', {email, password});
    if (email && password) {
        const response = await fetch("/api/doctors/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/doctors-dash");
        } else {
            alert(response.statusText);
        }
    }
}
document
    .querySelector(".login-form")
    .addEventListener("submit", loginDoctorHandler);