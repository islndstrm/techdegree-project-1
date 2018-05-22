// This program displays a new quote every time the button is clicked or every 15 seconds

// sets up the array that holds the quotes
const quotes = [
  {
    quote: "The secret to happiness is freedom. The secret to freedom is courage.",
    source: "Thurcydides",
    type: "Motivational quote."
  },
  {
    quote: "A day without sunshine is like, you know, night.",
    source: "Steve Martin",
    type: "Humorous quote."
  },
  {
    quote:  "Worrying means you suffer twice.",
    source: "Newt Scamander",
    citation:  "Fantastic Beasts and Where to Find Them",
    year: 2016,
    type: "Movie quote."
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    type: "Motivational quote."
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    source: "Will Rogers",
    type: "Inspirational quote."
  },
  { quote: "Life is either a daring adventure or nothing." ,
    source: "Helen Keller",
    citation: "Let Us Have Faith",
    year: 1940,
    type: "Inspirational quote."
  },
  {
    quote: "Let us remember: one book, one pen, one child, and one teacher can change the world.",
    source: "Malala Yousafzai",
    type: "Inspirational quote."
  },
  {
    quote: "The person, be it gentleman or lady, who has not pleasure in a good novel must be intolerably stupid.",
    source: "Jane Austen",
    citation: "Northanger Abbey",
    year: 1817,
    type: "Book quote."
  },
  {
    quote: "If you want your children to listen, try talking softly - to someone else.",
    source: "Ann Landers",
    type: "Humorous quote."
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    type: "Inspirational quote."
  }
];

// generates a new quote every 15 seconds
const intervalID = window.setInterval(printQuote, 15000);

// generates a random number and uses it to return a random quote from the quotes array
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

// generates a random color hex value
function getRandomColor () {
  return Math.floor(Math.random() * 256 );
}

// generates and returns a random RGB color
function randomColor() {
  let red = getRandomColor();
  let green = getRandomColor();
  let blue = getRandomColor();
  return `rgb(${red}, ${green}, ${blue})`;
  // html += '<div style="background-color:' + rgbColor + '"></div>';
}

// constructs the HTML and text to display for each new quote and prints it to the page
function printQuote() {
  let storeQuote = getRandomQuote();
  let text = `<p class="quote"> ${storeQuote.quote} </p> <p class="source">${storeQuote.source}`;
  if (storeQuote.citation != null) {
    text += `<span class="citation">${storeQuote.citation}</span>`;
  }
  if (storeQuote.year != null) {
    text += `<span class="year">${storeQuote.year}.</span>`;
  }
  if (storeQuote.type != null) {
    text += `<span class="type">${storeQuote.type}</span>`
  }
  text += "</p>"
  document.getElementById('quote-box').innerHTML = text;
  document.body.style.backgroundColor = randomColor();
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
