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
function pullRandomQuote(){  
 do{  var num =  Math.floor(Math.random() * quotes.length);
  } while (currentQuote === num);
currentQuote = num;
quoteAndAuthor = "<h3>" + quotes[num].quote + "</h3>-" + quotes[num].author;
document.getElementById("randomQuote").innerHTML = quoteAndAuthor;
 }

//change background color when click me is clicked
function changeBgColor() {
   var num =  Math.floor(Math.random() * (12 - 1)) + 1;
  switch(num) {
    case 1:
     clr = "#f44336";
         break;
         case 2:
         clr = "#e91e63";
         break;
         case 3:
         clr = "#9c27b0";
         break;
         case 4:
         clr = "#673ab7";
         break;
         case 5:
         clr = "#3f51b5";
         break;
         case 6:
         clr = "#2196f3";
         break;
         case 7:
         clr = "#03a9f4";
         break;
      case 8:
      ckr = "#00bcd4";
      break;
    case 9:
      clr="#4caf50";
      break;
    case 10:
      clr="#8bc34a";
      break;
    case 11:
      clr="#ff9800";
      break;
            }
  document.body.style.background = clr;
}
//change quote in tweet link
function tweetIt(){
  document.getElementById("tweetIt").innerHTML = '<a href="https://twitter.com/intent/tweet?text='+quote+'&tw_p=tweetbutton&url=https%3A%2F%2Fcodepen.io%2Fbbenkert%2Fpen%2FWOaqRR"><button class="fa fa-twitter btn blue lighten-1"> Tweet</button>';
}
