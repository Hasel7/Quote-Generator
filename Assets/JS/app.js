let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


const url = "https://zenquotes.io/api/random";

function getProxyUrl() {
    return "https://api.allorigins.win/get?url=" + encodeURIComponent(url) + "&t=" + new Date().getTime();
}


let getQuote = () => {
    fetch(getProxyUrl())
        .then((response) => response.json())
        .then((data) => {
            const item = JSON.parse(data.contents)[0];
            quote.innerHTML = item.h;
            author.innerText = "";
        })
        .catch((error) => {
            quote.innerText = "Could not load quote. Please try again.";
            author.innerText = "";
        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click",function(){
    getQuote();
});

