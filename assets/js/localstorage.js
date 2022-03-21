const register = document.querySelector(".register");
let localStorage = [];

register.addEventListener("click", () => {
  const fname = document.querySelector(".fname");
  const lname = document.querySelector(".lname");
  const email = document.querySelector(".email");
  const passwd_input = document.querySelector(".passwd");
  const passwd_repeat = document.querySelector(".passwd-repeat");

  if (passwd_input.value.length > 1 && passwd_repeat.value.length > 1) {
      console.log("Text is not too short");
    if (passwd_input.value === passwd_repeat.value) {
      alert("Success!");
      window.location.href = "http://netmor.netlify.app/kirjautumis.html";
    } else {
      alert("Failed!");
    }
  }
  else {
      console.log("Text is short");
  }
});
