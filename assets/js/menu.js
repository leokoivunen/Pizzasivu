let showFood = () => {
  const foodMenu = document.querySelector(".food-container")
  foodMenu.style.display = "inline-flex";

  const drinksMenu = document.querySelector(".drinks-container")
  drinksMenu.style.display = "none";
}

let showDrinks = () => {
  const drinksMenu = document.querySelector(".drinks-container")
  drinksMenu.style.display = "inline-flex";

  const foodMenu = document.querySelector(".food-container")
  foodMenu.style.display = "none";
}

window.addEventListener('DOMContentLoaded', (event) => {
  let yhteenveto = document.querySelector(".total_price")
  yhteenveto.textContent = 0
});

let addPizzas = () => {
  let yhteenveto = document.querySelector(".total_price")
  let price = document.querySelector(".food_price")
  yhteenveto.textContent = price.textContent
  console.log("Haluatko kuljetuksen vai tuletko noutaa pizzan?")
}

let showForm = () => {
  let hidden = document.querySelector(".div")
  let mainTxt = document.querySelector(".header_title")
  let form = document.querySelector(".form")

  hidden.style.display = "none";
  mainTxt.style.display = "none";
  form.style.display = "block";
}

let orderProducts = () => {
  console.log("Ordering...")
  console.log("Getting...")
  console.log("Done!")

  let form = document.querySelector(".form")
  form.style.display = "none";

  let form2 = document.querySelector(".kaava_form")
  form2.style.display = "block";
}