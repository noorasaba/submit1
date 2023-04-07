// Typing boss start from here
jQuery(function($) {
const words=document.querySelector(".words").children;
const output=document.querySelector(".output");

let wordIndex=0;
let charIndex=0;
let textArray;

function start() {
  const text=words[wordIndex].getAttribute("data-text")
  textArray=text.split("");
  output.innerHTML="";
  typing();
}

function typing(){
      
      if(charIndex==textArray.length){
          charIndex=0;
          if(wordIndex==words.length-1){
            wordIndex=0;
          }
          else{
            wordIndex++;
          }
          setTimeout(function(){
             start();	
          },2500)
          
      }
      else{
             
   span=document.createElement("span");
   span.innerHTML=textArray[charIndex];
   output.appendChild(span);
   charIndex++;
       setTimeout(typing,80);
      }
}

  window.onload=start();
});
// typing boss end here


// sticly js pluing
  $(document).ready(function(){
    $(".navbar").sticky({
      topSpacing:0,
      'zIndex' : "",
    });
  });
// sticly js pluing end










