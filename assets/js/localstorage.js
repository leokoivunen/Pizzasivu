const register = document.querySelector(".register");
let localStorage = [];

register.addEventListener("click", () => {
  console.log("when button is clicked");
  const fname = document.querySelector(".fname");
  const lname = document.querySelector(".lname");
  const email = document.querySelector(".email");
  const passwd_input = document.querySelector(".passwd");
  const passwd_repeat = document.querySelector(".passwd-repeat");

  if (passwd_input.value.length > 1 && passwd_repeat.value.length > 1) {
    if (passwd_input.value === passwd_repeat.value) {
        window.location.href = "http://netmor.netlify.app/kirjautumis.html";
    } else {
      alert("Salasana ja salasana uudelleen on väärin!");
    }
  }
  else {
    alert("Täytä tyhjät tekstilaatikot")
  }
});