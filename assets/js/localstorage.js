const register = document.querySelector(".register");

register.addEventListener("click", () => {
  const fname = document.querySelector(".fname");
  const lname = document.querySelector(".lname");
  const email = document.querySelector(".email");
  const passwd_input = document.querySelector(".passwd");
  const passwd_repeat = document.querySelector(".passwd-repeat");

  console.log("First Name: " + fname.value);
  console.log("Last Name: " + lname.value);
  console.log("Email: " + email.value);
  console.log("Password: " + passwd_input.value);
  console.log("Password Repeat: " + passwd_repeat.value);

  // if (passwd_input.value === passwd_repeat.value) {
  //   window.location.href = "http://netmor.netlify.app/kirjautumis.html";
  // } else {
  //   alert("Salasana ja salasana uudelleen on väärin!");
  // }
});
