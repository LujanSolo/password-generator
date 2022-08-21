// Assignment code
var generateBtn = document.querySelector("#generate");


// List of all possible characters for password, masterArray to hold random selections, character min/max
// var isLower = "abcdefghijklmnopqrstuvwxyz";
// var isUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var isSpecial = " !@#$%^&*()_-+=\"'{/}:;?>.<,";
// var isNumber = "1234567890";


var isLower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
var isUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var isSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var isNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


var masterArray = [isLower, isUpper, isSpecial, isNumber];

var minChars = 8;
var maxChars = 128;
  
// function must go through prompts, resetting user if character number is invalid
function generatePassword() { 

  var possibleChars = [];
  

  // A SERIES OF PROMPTS TO LEAD USER THRU PASSWORD INPUT OPTIONS:
  var passwordLength = parseInt(prompt("How long would you like your password to be? Be sure to pick a number between 8 and 128."));
  // if clause to check if password length is valid
  if (passwordLength < minChars || passwordLength > maxChars)
      return alert("Please select a number between 8 and 128."),
      prompt.passwordLength;
// PROMPTS CONTINUED...
  var lowerChars = confirm("Would you like to include lower case letters? \nOK for YES, Cancel for NO");
  var upperChars = confirm("Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO");
  var specialChars = confirm("Would you like to include special characters? \nOK for YES, Cancel for NO");
  var numberChars = confirm("Would you like to include numbers in your password? \nOK for YES, Cancel for NO");

  // AN INDEX FOR THE PASSWORD
  var password = [];

  // if clause to see if user chose at least one character type:
  if (!lowerChars && !upperChars && !specialChars && !numberChars) {
    alert("Please choose at least one character style. We're wasting time, here...");
    return generatePassword();}
    elseif (lowerChars || upperChars || specialChars || numberChars)
      if (lowerChars) {
        possibleChars = possibleChars.concat(isLower);
      }   if (upperChars) {
        possibleChars = possibleChars.concat(isUpper);
      }   if (specialChars) {
        possibleChars = possibleChars.concat(isSpecial);
      }   if (numberChars) {
        possibleChars = possibleChars.concat(isNumber);
      }
      console.log(possibleChars);
      for (i=0; i<passwordLength.length; i++) {
      password = password.concat(randoChars(possibleChars));
     }
    return password
  }   


function randoChars(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
  }

// console.log("heya");
generateBtn.addEventListener("click", generatePassword);