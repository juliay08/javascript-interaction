var heading;
var executeButton;
var outputParagraph;
var inputElement;
var songs = ["Unholy by Sam Smith & Kim Petras", "Anti-Hero by Taylor Swift", "As it Was by Harry Styles", "Super Freaky Girl by Nicki Minaj", "golden hour by JVKE", "Bones by Imagine Dragons", "Bad Habit by Steve Lacy", "Shut Down by BLACKPINK", "Glimpse of Us by Joji", "Left and Right by Charlie Puth and Jungkook"];
var fonts = ["Poor Story", "Kanit", "Josefin Sans", "Teko", "Shadows Into Light", "Urbanist"];

document.addEventListener("DOMContentLoaded", function(){
  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");
  executeButton.addEventListener("click", function(){
    generateSong();
    restyle()
  });
})

function generateSong(){
  var currentInputText = inputElement.value;
  var randomSongIndex = Math.floor(Math.random()*songs.length);
  outputParagraph.innerText = currentInputText + ", you should listen to "+ songs[randomSongIndex] ;
}

function restyle(){
  var randomR = Math.random() * 255;
  var randomG = Math.random() * 255;
  var randomB = Math.random() * 255;
  var outputColorString = "rgb(" + randomR + "," + randomG + "," + randomB + ")";

  var randomR2 = Math.random() * 255;
  var randomG2 = Math.random() * 255;
  var randomB2 = Math.random() * 255;
  var outputColorString2 = "rgb(" + randomR2 + "," + randomG2 + "," + randomB2 + ")";

  var randomFont = Math.floor(Math.random()*fonts.length);

  var randomRotate = -5 + (Math.random() * 10);

  outputParagraph.style.color = outputColorString;
  outputParagraph.style.backgroundColor = outputColorString2;
  outputParagraph.style.fontFamily = fonts[randomFont];
  outputParagraph.style.transform = "rotate(" + randomRotate + "deg)";
  }
