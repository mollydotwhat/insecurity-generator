// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
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
    
  
    // ask about this list of character types: lowercase, uppercase, numeric, and/or special characters
    var charTypes;
    function charOptions(){
      charTypes = prompt("Choose character types:");
      //put a list to select from in the prompt
      //put into array
      return charTypes;
    }
    charOptions();
   



    //create array/object of length thingLength
var finalWord;
function mixingBowl(){
    //numbers array
    //letters array (just a list, use split)
    //special characters array (list? using split again?)
//for each until thingLength - 1 (because index starts at 0), from prev defined parameter arrays
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
