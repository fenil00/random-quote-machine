const newQuoteButton = document.querySelector("#new-quote");
const quoteText = document.querySelector("#text");
const quoteAuthor = document.querySelector("#author");
const tweetQuote = document.querySelector("#tweet-quote");

newQuoteButton.addEventListener('click', async function(){
    await loadQuote();
});

window.addEventListener('load', async function(){
    await loadQuote();
});

tweetQuote.addEventListener('click',function(){
    tweetQuote.setAttribute('href',  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + quoteText.innerText + '" ' + quoteAuthor.innerText));
})

const loadQuote = async function(){
    const randomcolor = randomColor();
    document.body.style.backgroundColor = randomcolor;
    quoteText.style.color = randomcolor;
    newQuoteButton.style.backgroundColor = randomcolor;

    const content = await fetchQuote();
    
    quoteText.innerText =  content.content;
    quoteAuthor.innerText = "- " + content.author;

};

const fetchQuote = async function() {
    try{
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        return data;
    }catch(e){
        console.log("Error !!!", e);
    }
}

const randomColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    return `rgb(${r},${g},${b})`;
}