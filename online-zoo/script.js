const toggle = document.querySelector(".toggle");
const logo__img = document.querySelector(".logo__img");
const value = document.querySelectorAll(".value__black");
const input = document.querySelectorAll(".input__black");
const pay1 = document.querySelector(".pay1");
const pay2 = document.querySelector(".pay2");
const pay3 = document.querySelector(".pay3");
const map__block = document.querySelector(".map__block");

const black__bg = document.querySelectorAll(".black__bg");
const black__light__bg = document.querySelectorAll(".black__light__bg");
const white__text = document.querySelectorAll(".white__text");
const testi__item = document.querySelectorAll(".testi__item");

toggle.addEventListener("change", () => {

  black__bg.forEach( elem => {
    elem.classList.toggle("dark")
  })

  black__light__bg.forEach( elem => {
    elem.classList.toggle("dark__light")
  })

  white__text.forEach( elem => {
    elem.classList.toggle("dark__text")
  })

  testi__item.forEach( elem => {
    elem.classList.toggle("dark__testi__item")
  })

  value.forEach( elem => {
    elem.classList.toggle('value__white');
  })

  input.forEach( elem => {
    elem.classList.toggle('white');
  })
  
  if (!pay1.classList.contains("position2")) {
    pay1.src = `${"asserts/payment1__black.svg"}`;
    pay1.classList.add("position2");
  }
  else {
    pay1.src = `${"asserts/payment1.svg"}`;
    pay1.classList.remove("position2");
  }

  if (!pay2.classList.contains("position2")) {
    pay2.src = `${"asserts/payment2__black.svg"}`;
    pay2.classList.add("position2");
  }
  else {
    pay2.src = `${"asserts/payment2.svg"}`;
    pay2.classList.remove("position2");
  }

  if (!pay3.classList.contains("position2")) {
    pay3.src = `${"asserts/payment3__black.svg"}`;
    pay3.classList.add("position2");
  }
  else {
    pay3.src = `${"asserts/payment3.svg"}`;
    pay3.classList.remove("position2");
  }
  if (!logo__img.classList.contains("position2")) {
    logo__img.src = `${"asserts/logo__light.svg"}`;
    logo__img.classList.add("position2");
  }
  else {
    logo__img.src = `${"asserts/logo.svg"}`;
    logo__img.classList.remove("position2");
  }
  if (!map__block.classList.contains("position2")) {
    console.log("sa")
    map__block.style.backgroundImage = "url('asserts/map__black.png')";
    map__block.classList.add("position2");
  }
  else {
    map__block.style.backgroundImage = "url('asserts/map.png')";
    map__block.classList.remove("position2");
  }

  
})
