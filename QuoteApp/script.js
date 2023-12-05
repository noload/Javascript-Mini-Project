// https://api.quotable.io/random

const apiURL = "https://api.quotable.io/random?tags=technology"
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteBtn = document.getElementById("quote-btn");

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML =data.content;
    author.innerHTML = data.author;
    

}

// quoteBtn.addEventListener("click",()=>{
//     getQuote(apiURL);
// })

function tweet() {
    window.open(href="//api.whatsapp.com/send?phone=918308604968"+ `&text=${quote.innerHTML}`
    )
    
}