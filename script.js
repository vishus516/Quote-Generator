const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes =[];
//show loading
// Show Quotes
function newQuote(){
    // PIck a random Quotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check
    if(!quote.author){
        authorText.textContent="Unknown"
    }
    else{
    authorText.textContent=quote.author;
    }
    //check length
    quoteText.textContent=quote.text;

}
// get Quotes From API
async function getQuotes(){
    const apiURl="https://type.fit/api/quotes";
    try{
        const response =await fetch(apiURl);
        apiQuotes = await response.json();
        newQuote();
    }catch(eroor){
        alert(Error);
        // Catch Error
    }
}
// Tweet
function tweetQuote(){
    const twitterUrl= `
    https://twitter.com/intent/tweet?text=${quoteText.textContent}- ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
// event lister
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
// On Load
getQuotes();
