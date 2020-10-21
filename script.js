let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];
console.log("Hello World")
window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Part 1

    // Do all of your work inside the window.onload function (in other words, here!)
    document.getElementById("main-title").innerHTML = "Welcome!"//goes in side the quotes otw prints everything
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "lightblue" //style need to change  = 
    let list1 = document.getElementById("favorite-things");
        list1.removeChild(list1.lastElementChild)
    
     let newFont = document.getElementsByClassName("special-title");
     for (let i = 0; i < newFont.length; i++) {
       newFont[i].style.fontSize = "2rem";
        
     }  
    
//change name of website by selecting id
 let list2 = document.getElementById("past-races");
      list2.removeChild(list2.children[3]) //.children is specific type to elements vs. child (all types of nodes)
   
//append to list
let list3 = document.getElementById("past-races")
  let node = document.createElement("Li")
  let textNode = document.createTextNode("Lima")
  node.appendChild(textNode)
    list3.appendChild(node)
//blog post
 let newCity = document.createElement("div")//match to div in HTML
     newCity.className = "blog-post purple" //object classname assignment NOT text
let cityTitle = document.createElement("h1")
let cityTitleText = document.createTextNode("LIMA") //specific for adding text hence create text node
     cityTitle.appendChild(cityTitleText)
let paragraph = document.createElement("p")
 let paragraphText = document.createTextNode("I DROVE OFF A CLIFF, FLEW OVER A WHALE AND LANDED ON A NAVY SHIP!")
     paragraph.appendChild(paragraphText)
        newCity.appendChild(cityTitle)
        newCity.appendChild(paragraph)
let mainAppendage = document.getElementsByClassName("main")//get elementbyclassname returns an array so need ot select first[0] //to tie blog post back to main body tag of html
      mainAppendage[0].appendChild(newCity)} //beginning of list

 dom
