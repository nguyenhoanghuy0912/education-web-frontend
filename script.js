let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.onclick = () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

let profile = document.querySelector(".header .flex .profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  search.classList.remove("active");
};

let search = document.querySelector(".header .flex .search-form");

document.querySelector("#search-btn").onclick = () => {
  search.classList.toggle("active");
  profile.classList.remove("active");
};

let sideBar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle("active");
  body.classList.toggle("active");
};

document.querySelector("#close-btn").onclick = () => {
  sideBar.classList.remove("active");
  body.classList.remove("active");
};

window.onscroll = () => {
  profile.classList.remove("active");
  search.classList.remove("active");
};

const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === "") {
    showError(userName, "User name can not be blank");
  } else {
    showSuccess(userName);
  }

  if (emailValue === "") {
    showError(email, "Email can not be blank");
  } else if (!isEmail(emailValue)) {
    showError(email, "Not a valid email");
  } else {
    showSuccess(email);
  }

  if (passwordValue === "") {
    showError(password, "User name can not be blank");
  } else if (passwordValue.length < 6) {
    showError(password, "Enter at least 6 characters");
  } else {
    showSuccess(password);
  }

  if (confirmPasswordValue === "") {
    showError(confirmPassword, "Confirm password can not be blank");
  } else if (passwordValue != confirmPasswordValue) {
    showError(confirmPassword, "Passwords does not match");
  } else {
    showSuccess(confirmPassword);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function showSuccess(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
