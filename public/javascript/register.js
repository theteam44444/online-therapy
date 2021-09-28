async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const first_name = document.querySelector("#firstname-signup").value.trim();
  const last_name = document.querySelector("#lastname-signup").value.trim();
  const address = document.querySelector("#address-signup").value.trim();
  const birth_date = document.querySelector("#birthdate-signup").value.trim();

  if (email && password && first_name && last_name) {
    const response = await fetch("/api/clients", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        first_name,
        last_name,
        address,
        birth_date,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/patient-dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
