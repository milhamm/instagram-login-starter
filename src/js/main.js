const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");

function setError(message) {
  form.className = "error";
  document.querySelector(".message-error").textContent = message;
  return;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setError("Username kosong");
    return;
  }

  if (passwordValue === "") {
    setError("Password kosong");
    return;
  }

  if (usernameValue.length < 3) {
    setError("Username minimal 3 karakter");
    return;
  }

  if (usernameValue.length >= 10) {
    setError("Username maksimal 10 karakter");
    return;
  }

  form.className = "success";
});
