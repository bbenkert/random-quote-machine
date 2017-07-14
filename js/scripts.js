//randomly display a quote
var quotes = [
  {
    quote: "Eat my shorts",
    author: "Bart Simpson"
  },
    {
    quote: "I know kung fu",
    author: "Neo"
    },
  {
    quote: "There is no spoon",
    author: "Neo"
    },
  {
    quote: "Become master of Javascript you want, a very long time you must code",
    author: "Yoda"
    },
  {
    quote: "If you build it they will click on it",
    author: "Ben"
    },
  {
    quote: "There can be only one",
    author: "Highlander"
    },
  {
    quote: "A fact about lazy people: 24543345553455355345 You were too lazy to read that number",
    author: "Unknown"
    },
  {
    quote: "I have the power!!",
    author: "He-man"
    }
];
var currentQuote;
var Quote = "";
function pullRandomQuote(){  
 do{  var num =  Math.floor(Math.random() * quotes.length);
  } while (currentQuote === num);
currentQuote = num;
Quote = quotes[num].quote;
quoteAndAuthor = "<h3>" + Quote + "</h3>-" + quotes[num].author;
document.getElementById("randomQuote").innerHTML = quoteAndAuthor;
tweetQuote = quotes[num].quote;
console.log(Quote);

 }

//change background color when click me is clicked
var currentColor;
var backgroundColor = ["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#4caf50","#8bc34a","#ff9800"];
function changeBgColor() {
   do{ var num =  Math.floor(Math.random() * backgroundColor.length);
   } while (currentColor === num);
   currentColor = num;
  document.body.style.background = backgroundColor[num];
}
//change quote in tweet link
function tweetIt(){
  document.getElementById("tweetIt").innerHTML = '<a href="https://twitter.com/intent/tweet?text=' + Quote + '&tw_p=tweetbutton&url=https%3A%2F%2Fcodepen.io%2Fbbenkert%2Fpen%2FWOaqRR"><button class="fa fa-twitter btn blue lighten-1"> Tweet</button>';
}
