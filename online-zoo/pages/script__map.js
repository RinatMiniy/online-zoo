const toggle = document.querySelector(".toggle");
const black__light__bg = document.querySelectorAll(".black__light__bg");
const white__text = document.querySelectorAll(".white__text");
const black__bg = document.querySelectorAll(".black__bg");
const logo__img = document.querySelector(".logo__img");
const map__block = document.querySelector(".map__block");

console.log(black__light__bg)
toggle.addEventListener("change", () => {
  black__light__bg.forEach( elem => {
    elem.classList.toggle("dark__light")
  })

  black__bg.forEach( elem => {
    elem.classList.toggle("dark")
  })

  white__text.forEach( elem => {
    elem.classList.toggle("dark__text")
  })

  if (!logo__img.classList.contains("position2")) {
    logo__img.src = `${"../../asserts/logo__light.svg"}`;
    logo__img.classList.add("position2");
  }
  else {
    logo__img.src = `${"../../asserts/logo.svg"}`;
    logo__img.classList.remove("position2");
  }

  if (!map__block.classList.contains("position2")) {
    console.log("sa")
    map__block.style.backgroundImage = "url('../../asserts/map__black.png')";
    map__block.classList.add("position2");
  }
  else {
    map__block.style.backgroundImage = "url('../../asserts/map.png')";
    map__block.classList.remove("position2");
  }
})