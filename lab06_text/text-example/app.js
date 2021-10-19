/*
String documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Example by Dan Shiffman:
https://www.youtube.com/watch?v=DcoAjEZYies

*/

function getInput() {
  let input = document.getElementById("myInput").value;
  processText(input)
}

function processText(input) {

  //output just the text:
  addText("The text is: " + input);
  
  // Task: What's the text length?
  console.log(input.length);
  
  // Task: What's the fifth character in the text?
  const chars = input.split('');
  console.log(chars[5]);
  
  // Task: Output the last 10 characters of the text
  console.log(input.substr(-10));
  
  // Task: What's the second word in the text?
  const words = input.split(' ');
  console.log(words[1]);
  
  // where in the text does the word "rainbows" appear?
  const searchTerm = 'rainbows';
  const indexOfFirst = input.indexOf(searchTerm);
  console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
  
  // replace the word "love" with another verb
  let re = /love/gi;
  let newstr = input.replace(re, 'hate');
  console.log(newstr);
  
  // how many times does the word "love" appear
  let count = 0
  let position = input.indexOf('love')

  while (position !== -1) {
    count++
    position = input.indexOf('love', position + 1)
  }
  
  console.log(count);
  
  // count how many times each letter appears within the text and create a visualization of it
  

}





// two functions that actually write to the DOM. We're using D3 here but could also use vanilla javascript

function addText(text){
 d3.select('#app')
 .append('p')
 .text(text);
}


function addLetterWithSize(letter, textSize){
  d3.select('#concretePoetry')
  .append('span')
  
  .text(letter)
  .style("font-size", textSize+"px")
  ;
}

 
