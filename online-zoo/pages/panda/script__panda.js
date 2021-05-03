const toggle = document.querySelector(".toggle");
const black__light__bg = document.querySelectorAll(".black__light__bg");
const white__text = document.querySelectorAll(".white__text");
const black__bg = document.querySelectorAll(".black__bg");
const logo__img = document.querySelector(".logo__img");

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
})