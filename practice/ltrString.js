// Write a JavaScript program to rotate the string 'w3resource' in the right direction
function animateStr() {
  const element = document.getElementById("ltr");
  let textNode = element.childNodes[0];
  let text = textNode.data;

  let counter = 0;
  
  let interval = setInterval(() => {
    counter ++;
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;

    if (counter > 10) {
        clearInterval(interval);
    }
  }, 100);
}



