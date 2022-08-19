const newQuoteButton = document.querySelector("#new-quote");
const quoteText = document.querySelector("#text");
const quoteAuthor = document.querySelector("#author");
const tweetQuote = document.querySelector("#tweet-quote");
const newTweet = document.querySelector("#new-tweet");
 
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

    const content = await fetchQuote();
    
    quoteText.innerText =  "\"" + content.content + "\"";
    quoteAuthor.innerText = "- " + content.author;

    const randomcolor = randomColor();

    $("body").animate(
        {
          backgroundColor:randomcolor
        },
        1000
      );

    $("button").animate(
        {
          backgroundColor:randomcolor,
          color:"white"
        },
        1000
      );
      $("#text, #author").animate(
        {
          color:randomcolor
        },
        500
      );

    
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