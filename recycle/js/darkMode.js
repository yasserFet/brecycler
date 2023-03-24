let switcher = document.querySelector(".mode-switcher")
let switcherBall = document.querySelector(".mode-switcher .ball")

switcher.addEventListener("click", () => {
    switcherBall.classList.toggle("dark")
    if(switcherBall.classList.contains("dark")) {
        document.documentElement.style.setProperty('--nightModeColor', '#000');
        document.documentElement.style.setProperty('--darkModeColor', '#fff');
    } else {
        document.documentElement.style.setProperty('--nightModeColor', '#fff');
        document.documentElement.style.setProperty('--darkModeColor', '#000');
    }
})
