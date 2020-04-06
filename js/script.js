/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/**
 * Use Math to give us a random number from 0 to 255 (the acceptable range for
 * an RGB value) and then use parseInt to provide a round number.
 */
const getRandomRGB = () => {
  return parseInt(Math.random() * 255);
}

/**
 * Apply an RGB style to the `<body>` of the page using the getRandomRGB 
 * function three times.
 * 
 * NOTE: This code doesn't take into consideration accessibility standards 
 * around contrast for white text on the randomly generated background 
 * colors. Ideally we'd incorporate the minimum contrast expectations into the 
 * randomly generated RGB values, for now they're left as they are.
 */
const getRandomBackground = () => {
  document.querySelector('body').style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
}

/**
 * The array of quotes which will be printed to the page on load, button click 
 * and auto-refresh.
 * 
 *  - quote: The core body of text of the quote itself.
 *  - source: The individual or group responsible for the quote.
 *  - year: Which year it occured in, can be a number or string for ranges.
 *  - citation: Where this quote was spoken or written.
 *  - url: Link to a reference for the quote in question.
 */
const quotes = [
  {
    quote: 'Those who cannot remember the past are condemned to repeat it.', 
    source: 'George Santayana', 
    year: '1905',
    citation: 'The Life of Reason', 
  },
  {
    quote: "Failure is impossible.", 
    source: 'Susan B. Anthony', 
  },
  {
    quote: "Immortality is the best recollection one leaves.", 
    source: 'Napoleon Bonaparte', 
    citation: 'Memoirs of Napoleon', 
    url: 'https://en.wikiquote.org/wiki/Napoleon_I_of_France#Memoirs_of_Napoleon_(1829-1831)',
  },
  {
    quote: "Freedom only comes through persistent revolt, through persistent agitation, through persistently rising up against the system of evil.", 
    source: 'Napoleon Bonaparte', 
    year: '1957',
    citation: 'The Birth of a New Nation', 
    url: 'https://en.wikiquote.org/wiki/Martin_Luther_King,_Jr.#The_Birth_of_a_New_Nation_(1957)',
  },
  {
    quote: "Always believe in your dreams, because if you don't, you'll still have hope.", 
    source: 'Mahatma Gandhi', 
    year: '1924',
    citation: 'Young India', 
  },
];

/**
 * Provides us with the identifier for a random quote.
 */
const getRandomQuote = () => {
  const random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
};

/**
 * Using the random quote identifier from above we build the quote along with 
 * the corresponding pieces of information. Since some quotes don't have 
 * citations, urls, or years, these are only shown if the quote happens to 
 * have them.
 */
const printQuote = () => {
  getRandomBackground();
  const quote = getRandomQuote();
  let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  if (quote.citation) {
    html += `<span class="citation">`;
    html += quote.url ? 
      `<a class="citation-url" href="${quote.url}" target="_blank">${quote.citation}</a>` : quote.citation; // Wraps the citation in an anchor tag if a URL is provided.
    html += `</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  html += `</p>`;
  document.querySelector('#quote-box').innerHTML = html;
};

printQuote(); // The initial print to the page on load.
setInterval(printQuote, 15000); // Prints a new quote to the page every 15 seconds.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);