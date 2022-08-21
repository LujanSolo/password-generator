// Assignment code
var generateBtn = document.querySelector("#generate");

// List of all possible characters for password, masterArray to hold random selections, character min/max

var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialLetters = " !@#$%^&*()_-+=\"'{/}:;?>.<,";
var numberChars = "1234567890";
var minChars = 8;
var maxChars = 128;

// function must go through prompts, resetting user if character number is invalid
function generatePassword() {
  var possibleChars = "";
  var passwordLength = parseInt(
    prompt(
      "How long would you like your password to be? Be sure to pick a number between 8 and 128."
    )
  );

  // if clause to check if password length is valid
  // put in clause to restrict to numbers only
  if (
    passwordLength < minChars ||
    passwordLength > maxChars ||
    isNaN(passwordLength)
  ) {
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

  var password = ""; // password character storage

  //function below concats random characters from each var to the current password data
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

  // and add each type of characters that the user selected:
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

  // variable to include in formula below to offset "extra" characters in the password field, as *above* formula will add 1 for each type selected, automatically. So, it needs to be as below:
  var currentPasswordLength = password.length;
  for (i = 0; i < passwordLength - currentPasswordLength; i++) {
    password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  console.log(password);
  return password;
}

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
