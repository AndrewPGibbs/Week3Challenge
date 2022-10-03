// Assignment Code
const generateBtn = document.getElementById("#generateBtn");
const specialCharacters = "!@#$%^&*()";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// these are the prompts that would inquire on the users preference 
function generatePassword() {
    var passwordLength = prompt('Please define the preferred length of your password. No shorter than 8 characters and no longer than 128. ');
    var numbers = confirm('Would you like your password to contain numbers?');
    var lowerCases = confirm('Would you like lowercase letters in your password?');
    var upperCases = confirm('Would you like uppercase letters in your password?');
    var specialchars = confirm('Would you like special characters in your password?');
// this is the minimum count for characters
    var minimumCount = 0;

    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";

// this function is reponsible for generating the randomized characters
var functionArray = {

}


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
