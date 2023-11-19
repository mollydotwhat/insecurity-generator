// Assignment Code
var generateBtn = document.querySelector("#generate");


// global arrays = easier?
var lowAlpha = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["-", "_", "+", "=", "!", "#", "$", "*", "?", "%"]; // find somewhere
var someNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




function getrandomIndex(min, max){
  return Math.floor(Math.random() * (max - min) + min);
};

function generatePassword(){


let allArray = [];

function allOptions(){

  upperCase = window.confirm("Include uppercase letters?");
  if (upperCase === true){
    allArray = allArray.concat(upAlpha);
    console.log("yes uppercase")
  } else {
    console.log("no uppercase letters")
  };

  lowerCase = window.confirm("Include lowercase letters?")
  if (lowerCase === true){
    allArray = allArray.concat(lowAlpha);
    console.log("yes lowercase")
  } else {
    console.log("no lowercase letters")
  };

  moreChars = window.confirm("Include special characters?")
  if (moreChars === true){
    allArray = allArray.concat(specialChar);
    console.log("yes special characters")
  } else {
    console.log("no special characters")
  };
  // var totalLength = allArray.length();
  console.log(allArray)
  return allArray; 
};

var pickLength;
function getLength() {
  pickLength = Number(window.prompt("Choose a password length between 8 and 128", ""));
  if (pickLength < 8) {
    alert("Not in range. Please try again.")
  } else if (pickLength > 128) {
    alert("Not in range. Please try again.")
  } else {
    console.log(pickLength);  
  }
};

getLength();
allOptions();

let finalWord = [];
var totalLength = allArray.length;
function mixingBowl(){
  for (i = 0; i < pickLength; i++){
    finalWord.push(allArray[Math.floor(Math.random() * totalLength)]);
  }
  
 return finalWord;
}
mixingBowl();
// this join should be removing the commas and it isn't. i don't know why and i'm tired of trying different methods to make this work. NOT worth the time i've wasted on it.
yourPass = finalWord.join("");
return yourPass;
  };



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
