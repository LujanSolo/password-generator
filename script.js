// Assignment code
var generateBtn = document.querySelector("#generate");

// List of all possible characters for password, masterArray to hold random selections, character min/max
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialLetters = " !@#$%^&*()_-+=\"'{/}:;?>.<,";
var numberChars = "1234567890";

// var lowerLetters = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
// var isUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var isSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// var isNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// var masterArray = [lowerLetters, isUpper, isSpecial, isNumber];

var minChars = 8;
var maxChars = 128;

// function must go through prompts, resetting user if character number is invalid
function generatePassword() {
  console.log(3);
  var possibleChars = "";

  // A SERIES OF PROMPTS TO LEAD USER THRU PASSWORD INPUT OPTIONS:
  var passwordLength = parseInt(
    prompt(
      "How long would you like your password to be? Be sure to pick a number between 8 and 128."
    )
  );
  // if clause to check if password length is valid
  // put in clause to restrict to numbers only

  console.log(typeof passwordLength);

  if (
    passwordLength < minChars ||
    passwordLength > maxChars ||
    isNaN(passwordLength)
  ) {
    console.log(5);
    alert("Invalid password length entered.");
    return;
  }

  // PROMPTS CONTINUED...
  var isLowerChars = confirm(
    "Would you like to include lower case letters? \nOK for YES, Cancel for NO"
  );
  var isUpperChars = confirm(
    "Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO"
  );
  var isSpecialChars = confirm(
    "Would you like to include special characters? \nOK for YES, Cancel for NO"
  );
  var isNumberChars = confirm(
    "Would you like to include numbers in your password? \nOK for YES, Cancel for NO"
  );
  var password = "";

  if (isLowerChars) {
    password += lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }
  if (isUpperChars) {
    password += upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }
  if (isSpecialChars) {
    password +=
      specialLetters[Math.floor(Math.random() * specialLetters.length)];
  }
  if (isNumberChars) {
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
  }

  // if clause to see if user chose at least one character type:
  if (!isLowerChars && !isUpperChars && !isSpecialChars && !isNumberChars) {
    alert("Please choose at least one character style.");
    return;
  }
  console.log(1);
  // if (lowerChars || upperChars || specialChars || numberChars) {
  if (isLowerChars) {
    possibleChars += lowerLetters;
  }
  if (isUpperChars) {
    possibleChars += upperLetters;
  }
  if (isSpecialChars) {
    possibleChars += specialLetters;
  }
  if (isNumberChars) {
    possibleChars += numberChars;
  }
  console.log(possibleChars);
  var currentPasswordLength = password.length;

  for (i = 0; i < passwordLength - currentPasswordLength; i++) {
    password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    // console.log(possibleChars.length);
  }
  console.log(password);
  return password;
}

console.log(2);

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  console.log(randIndex);
  return randElement;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
