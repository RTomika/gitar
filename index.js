const switchBtn = document.getElementById("switch");
const body = document.body;
const span = document.getElementById("span");

switchBtn.addEventListener("click", () => {
    if(!body.classList.contains("darkmode")){
        body.classList.add("darkmode");
        span.innerHTML = "Lightmode";
    }
    else {
        body.classList.remove("darkmode");
        span.innerHTML = "Darkmode";
    }
})
