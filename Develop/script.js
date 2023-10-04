// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var allLettersLow= ["abcdefghijklmnopqrstuvwxyz"]; //find split function for this
  var allLettersUp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; //again, neet to split
  var specialCharList;
  var intList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //prompt (write to page or pop up??) w/criteria choices
  //get password criteria from choices:
    //prompt choosing password length bwtn 8 & 128
    //get length function??
    var thingLength;
    function getLength() {
      thingLength = prompt("Choose a password length between 8 and 128");
      //make it evaluate as int somehow?
      //if statement to validate input
      if (thingLength < 8) {
        alert("Not in range. Please try again.")
      } else if (thingLength > 128) {
        alert("Not in range. Please try again.")
      } else {
        console.log(thingLength);
        return thingLength;
      }
    }
    getLength();
    //set length variable
   
    var charTypes;
    function allOptions(){
      charTypes = prompt("Choose character types:");
       
       // ask about this list of character types: lowercase, uppercase, numeric, and/or special characters
      //select from intList and allCharsUp and allCharsDown and specialChars.
      //add all selections to an array
      //put into array
      return charTypes;
    }
    allOptions();
   
  function mixingBowl(){
    //add generate array finalWord from array allOptions of length thingLength
  return finalWord;
}; 
  //return statement? i think
  return finalWord;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
