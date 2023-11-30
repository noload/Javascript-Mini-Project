let h2Ele=document.getElementById('color-code');

function colorGenerator(){
    const randomNumber =Math.floor(Math.random()*1677285);
    const randomCode = "#"+ randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    h2Ele.innerHTML=randomCode;
    navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener('click',colorGenerator);

colorGenerator();