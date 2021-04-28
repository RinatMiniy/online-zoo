const toggle = document.querySelector(".toggle");
const header = document.querySelector("header");
const info = document.querySelector(".info");
const inspire = document.querySelector(".inspire");
const pets = document.querySelector(".pets");
const works = document.querySelector(".works");
const payment = document.querySelector(".payment");
const testi = document.querySelector(".testi");
const map = document.querySelector(".map");
const logo__img = document.querySelector(".logo__img");
const value = document.querySelectorAll(".value__black");
const input = document.querySelectorAll(".input__black");
const pay1 = document.querySelector(".pay1");
const pay2 = document.querySelector(".pay2");
const pay3 = document.querySelector(".pay3");

console.log()
console.log(input)

toggle.addEventListener("change", () => {
  header.classList.toggle('dark');
  works.classList.toggle('dark');
  pets.classList.toggle('dark');
  testi.classList.toggle('dark');

  inspire.classList.toggle('dark__light');
  payment.classList.toggle('dark__light');
  map.classList.toggle('dark__light');

  value.forEach( elem => {
    elem.classList.toggle('value__white');
  })

  input.forEach( elem => {
    elem.classList.toggle('white');
  })
  
  logo__img.src = `${"asserts/logo__light.svg"}`;

  pay1.src = `${"asserts/payment1__black.svg"}`;
  pay2.src = `${"asserts/payment2__black.svg"}`;
  pay3.src = `${"asserts/payment3__black.svg"}`;

  
})
