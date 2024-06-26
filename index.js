const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function() {
    try{
        btnEl.disabled = true;
        document.querySelector(".anime-name").style.fontSize = '16px';
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "spinner.svg";
        const response = await fetch(`https://nekos.best/api/v2/neko`);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.results[0].url;
        var regex = /^[A-Za-z][A-Za-z0-9]*$/;
       
        animeNameEl.innerText = data.results[0].artist_name;
        if (!regex.test(data.results[0].artist_name)) {
            document.querySelector(".anime-name").style.fontSize = '12px';
        } else {
            document.querySelector(".anime-name").style.fontSize = '16px';
        }
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        document.querySelector(".anime-name").style.fontSize = '16px';
        animeNameEl.innerText = "An error happened, please try again";
    }
})