const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = username.value.trim();

  if (inputValue === "") {
    form.className = "error";
    form.querySelector(".message-error").textContent = "Kosong";
    return;
  }

  if (inputValue.length < 4) {
    form.className = "error";
    form.querySelector(".message-error").textContent = "Kurang gan";
  } else if (inputValue.length >= 6) {
    form.className = "error";
    form.querySelector(".message-error").textContent = "Kelebihan gan";
  }

  console.log(inputValue);
});
