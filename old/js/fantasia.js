function askUser() {
  let pop = document.getElementById("popup");
  pop.style.display = "block";

  let proc = document.getElementById("process");
  proc.style.display = "none";
}

function getOrderDetails() {
  let form = document.querySelector(".bottom-form");
  form.style.display = "block";
}

function closeForm() {
  let pop = document.getElementById("popup");
  pop.style.display = "none";

  let proc = document.getElementById("process");
  proc.style.display = "block";
}
