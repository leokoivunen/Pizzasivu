const register = document.querySelector(".register");

register.addEventListener("click", () => {
  const fname = document.querySelector(".fname");
  const lname = document.querySelector(".lname");
  const email = document.querySelector(".email");
  const passwd_input = document.querySelector(".passwd");
  const passwd_repeat = document.querySelector(".passwd-repeat");

  if (passwd_input.value === passwd_repeat.value) {

    localStorage.setItem("Email", "" + email.value);
    localStorage.setItem("Password", "" + passwd_input.value);

    alert("Register success!");
    alert("Redirecting user to new address")
  } else {
    alert("Syöttämäsi salasana ei ole sama kuin vahvistettava salasana...");
  }
});
