document.querySelector(".install-app").addEventListener("click", () => {
    window.location.href = "./assets/spotify-1-2-31-1205.exe"
})
search = document.querySelector(".Search")
search.addEventListener("click", (event) => {
    document.querySelector(".Search>input").style.display = "inline"
    document.querySelector(".Search>a").style.display = "none"
    document.querySelector(".Search>button").addEventListener("click", () => {
        value = document.querySelector(".Search>input").value;
        if (value != "") console.log(value);
        document.querySelector(".Search>input").value = ""
    })
})


cards = document.querySelectorAll(".card")
for (let card of cards) {
    card.addEventListener("click", () => {
        document.querySelector(".album-picture>img").src = card.querySelector("img").src;

    })
}

icon1 = document.querySelector(".icon1")
icon1.addEventListener("click", () => {
    icon1.style.backgroundColor="green";
})