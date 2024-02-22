const quote = document.getElementById('quote')
const author = document.getElementById('author')
const API_URL = 'https://api.quotable.io/quotes/random?tags=technology,famous-quotes'



async function getQuote(url){
    const response = await fetch(url)
    let data = await response.json()

    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}

getQuote(API_URL)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " -" + author.innerHTML, "Tweet Window", "width=600, height=300")
}