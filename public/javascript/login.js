async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-doctor").value.trim();
  const password = document.querySelector("#password-doctor").value.trim();

  if (email && password) {
    const response = await fetch("/api/doctors/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      // document.location.replace("/dashboard");
      alert("success");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
