// assign array variables
// create the function
// display the function


const quote = [
    "Everyday, you give me a reason to live for",
    "The best days are days I get to spend with you",
    "I cant wait to spend our future and life altogether",
    "I am happy whenever I make you happy"
];

function generateQuote () {
    const generate = Math.floor(Math.random() * quote.length);
return quote[generate];

};

function displayQuote () {
    const randomQuote = generateQuote();
    const quoteElementtoHTML = document.getElementById('quote-display');
    quoteElementtoHTML.textContent = randomQuote;
}
