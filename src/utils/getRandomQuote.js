const API_URL = 'https://api.quotable.io/quotes/random?tags=technology,famous-quotes';

const getRandomQuote = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default getRandomQuote;