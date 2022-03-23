const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
registerForm.style.display = "none";

// User profile
let userProfile = document.getElementById("profile");

// Name and Password from the register-form
let registered_fname = document.getElementById("register_fname");
let registered_lname = document.getElementById("register_lname");

let registered_email = document.getElementById("register_email");
let registered_passwd = document.getElementById("register_passwd");
let registered_passwdrepeat = document.getElementById("register_passwdrepeat");

function registerUser(user) {
  if (registered_passwd.value === registered_passwdrepeat.value) {
    let registered_name = registered_fname.value + " " + registered_lname.value;

    localStorage.setItem("Email", registered_email.value);
    localStorage.setItem("Password", registered_passwd.value);
    localStorage.setItem("Profile", registered_name);
    alert("Käyttäjä on rekisteröity!")
    registerForm.style.display = "none";
    window.location.href = "https://netmor.netlify.app/index.html";
  } else {
    alert("Salasanan vahvistus on epäonnistunut");
  }
}

function loginUser(user) {
  let stored_email = localStorage.getItem("Email");
  let stored_passwd = localStorage.getItem("Password");

  let login_email = document.getElementById("login_email");
  let login_passwd = document.getElementById("login_passwd");

  if (login_email.value === stored_email && login_passwd.value === stored_passwd) {
    alert("Olet kirjautunut sisään!");
  } else {
    alert("Salasana tai sähköposti on väärä.");
  }
}

function showRegisterForm(user) {
  loginForm.style.display = "none";

  registerForm.style.display = "block";
}

function showLoginForm(user) {
  loginForm.style.display = "block";

  registerForm.style.display = "none";
}

window.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("Profile") === null) {
    userProfile.innerText = "Kirjaudu sisään";
  } else {
    userProfile.innerText = localStorage.getItem("Profile");
  }
});
