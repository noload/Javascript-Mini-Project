// https://api.quotable.io/random

const apiURL = "https://api.quotable.io/random?tags=technology"
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteBtn = document.getElementById("quote-btn");

async function getQuote(url) {
    colorGenerator()
    
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML =data.content;
    author.innerHTML = data.author;
    colorGenerator()
    

}

// quoteBtn.addEventListener("click",()=>{
//     getQuote(apiURL);
// })

function tweet() {
    window.open(href="//api.whatsapp.com/send?phone=918308604968"+ `&text=${quote.innerHTML}`
    )
    
}


function colorGenerator(){
    const randomNumber =Math.floor(Math.random()*1677285);
    const randomCode = "#"+ randomNumber.toString(16);
    quote.style.color =randomCode

}

document.getElementById('btn').addEventListener('click',colorGenerator);

colorGenerator();
