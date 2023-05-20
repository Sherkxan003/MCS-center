const slider = document.querySelector(".carusel")
const sliderButton = document.querySelector(".carusel_btn")
console.log(sliderButton);

sliderButton.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(sliderButton.children).forEach(item => {
            item.classList.remove("active")


        })
        if (e.target.classList.contains("first")) {
            e.target.classList.add("active")
            slider.style.transform = "translateY(0)"
            slider.style.transition = "all 1s ease"

        }
        if (e.target.classList.contains("second")) {
            e.target.classList.add("active")
            slider.style.transform = "translateY(-550px)"
            slider.style.transition = "all 1.5s ease"
        }
        if (e.target.classList.contains("third")) {
            e.target.classList.add("active")
            slider.style.transform = "translateY(-1100px)"
            slider.style.transition = "all 1.5s ease"
        }
    }

})
const body =document.querySelector("body")
const btnMenu = document.querySelector(".menu_btn")
const navMenu = document.querySelector(".nav_list")
console.log(navMenu);
btnMenu.addEventListener("click", (e) => {
    navMenu.classList.toggle("active")
    body.classList.toggle("active")

})