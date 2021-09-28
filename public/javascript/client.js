async function loginClientHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-client").value.trim();
  const password = document.querySelector("#password-client").value.trim();

  if (email && password) {
    const response = await fetch("/api/clients/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
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
  .querySelector(".login-form")
  .addEventListener("submit", loginClientHandler);
