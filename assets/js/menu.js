let showFood = () => {
  const foodMenu = document.querySelector(".food-container");
  foodMenu.style.display = "inline-flex";

  const drinksMenu = document.querySelector(".drinks-container");
  drinksMenu.style.display = "none";
};

let showDrinks = () => {
  const drinksMenu = document.querySelector(".drinks-container");
  drinksMenu.style.display = "inline-flex";

  const foodMenu = document.querySelector(".food-container");
  foodMenu.style.display = "none";
};

window.addEventListener("DOMContentLoaded", (event) => {
  let yhteenveto = document.querySelector(".total_price");
  yhteenveto.textContent = 0;
});

let addPizzas = () => {
  let yhteenveto = document.querySelector(".total_price");
  let price = document.querySelector(".food_price");
  yhteenveto.textContent = price.textContent;
  console.log("Haluatko kuljetuksen vai tuletko noutaa pizzan?");
};

let showForm = () => {
  let hidden = document.querySelector(".div");
  let mainTxt = document.querySelector(".header_title");
  let form = document.querySelector(".form");

  hidden.style.display = "none";
  mainTxt.style.display = "none";
  form.style.display = "block";
};

let orderProducts = () => {
  let addres = document.getElementById("address").value;

  if (addres === "kerava") {
    console.log("Aika: 10min");
  } else if (addres === "vantaa") {
    console.log("Aika: 20min");
  } else {
    console.log("Emme toimita pizzoja tälle alueelle");
  }

  let form = document.querySelector(".form");
  form.style.display = "none";

  let form2 = document.querySelector(".kaava_form");
  form2.style.display = "block";
};
