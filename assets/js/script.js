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

    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";

// this function is reponsible for generating the randomized characters

        function makepassword(passwordLength) {
       const array = new Uint32Array(passwordLength) ;
       window.crypto.getRandomValues(array);
       for (i=0; i < passwordLength; i++){
        minimumNumbers += numberChars[array[i] % numberChars.length];
       }
       console.log(minimumNumbers)
       return minimumNumbers;
    }

    var functionArray = {
        getNumbers: function () {
          return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },
    
        // getLowerCases: function () {
        //   return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        // },
    
        // getUpperCases: function () {
        //   return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        // },
    
        // getSpecialCharacters: function () {
        //   return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        // }
    
      };

      if (numbers === true) {
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;
      } else {
        numbers = ''
      }
    
      if (lowerCases === true) {
       lowerCases = 'abcdefghijklmnopqrstuvwxyz'
        minimumCount++;
      } else {
        lowerCases = ''
      }
    
      if (upperCases === true) {
        upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        minimumCount++;
      } else {
        upperCases = ''
      }
    
      if (specialChar === true) {
        specialChar = '~`!@#$%^&*()-+={}[]|/:;<>,.?'
        minimumCount++;
      } else {
        specialChar = ''
      }

      var randomPasswordGenerated = "";

      for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        randomPasswordGenerated += randomNumber;
      }

      randomPasswordGenerated += minimumNumbers;
      randomPasswordGenerated += minimumLowerCases;
      randomPasswordGenerated += minimumUpperCases;
      randomPasswordGenerated += minimumSpecialCharacters;
      return randomPasswordGenerated;
}


