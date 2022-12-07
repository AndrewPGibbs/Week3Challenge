// Assignment Code
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)


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
    var specialChar = confirm('Would you like special characters in your password?');
// this is the minimum count for characters
    var minimumCount = 0;


// if numbers is selected , 1-9 will be added to be used
      if (numbers === true) {
        numbers = '123456789'
        minimumCount++;
      } else {
        numbers = ''
      }
// adds lowercases to be used if selected
      if (lowerCases === true) {
       lowerCases = 'abcdefghijklmnopqrstuvwxyz'
        minimumCount++;
      } else {
        lowerCases = ''
      }
    //uuper cases added if true
      if (upperCases === true) {
        upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        minimumCount++;
      } else {
        upperCases = ''
      }
    //special characters added if true
      if (specialChar === true) {
        specialChar = '~`!@#$%^&*()-+={}[]|/:;<>,.?'
        minimumCount++;
      } else {
        specialChar = ''
      }
      var randomPasswordGenerated = "";

      randomPasswordGeneratedString = specialChar.concat(lowerCases, upperCases, numbers);
      for (var i = 0; i < passwordLength; i++) {
        randomPasswordGenerated += randomPasswordGeneratedString[Math.floor(Math.random() * randomPasswordGeneratedString.length)];
      }

      return randomPasswordGenerated;
}


