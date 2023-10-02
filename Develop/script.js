// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //prompt (write to page or pop up??) w/criteria choices
  //get password criteria from choices
    //prompt choosing password length bwtn 8 & 128
    //set length variable
    // ask about this list of character types: lowercase, uppercase, numeric, and/or special characters
    //store those as variables? requisites/limitations for randomizers
  //plug those variables into so many randomizers
  //return statement? i think
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
