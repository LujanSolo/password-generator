// Assignment code
var generateBtn = document.querySelector("#generate");


// List of all possible characters for password, masterArray to hold random selections, character min/max
var isLower = "abcdefghijklmnopqrstuvwxyz";
var isUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var isSpecial = " !@#$%^&*()_-+=\"'{/}:;?>.<,";
var isNumber = "1234567890";

var masterArray = ["isLower", "isUpper", "isSpecial", "isNumber"];

var minChars = 8;
var maxChars = 128;

// function must go through prompts, resetting user if character number is invalid
function generatePassword() { 

  var possibleChars = "";
  
  var passwordLength = parseInt(prompt("How long would you like your password to be? Be sure to pick a number between 8 and 128."));
  // if clause to check if password length is valid
  if (passwordLength < minChars || passwordLength > maxChars) {
    prompt.passwordLength;
    return alert("Please select a number between 8 and 128.");
    return generatePassword();
  }
  var lowerChars = confirm("Would you like to include lower case letters? \nOK for YES, Cancel for NO");
  var upperChars = confirm("Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO");
  var specialChars = confirm("Would you like to include special characters? \nOK for YES, Cancel for NO");
  var numberChars = confirm("Would you like to include numbers in your password? \nOK for YES, Cancel for NO");

  var password = "";

// if clause to see if user chose at least one character type:
  if (!lowerChars || !upperChars || !specialChars || !numberChars) {
    alert("Please choose at least one character style. We're wasting time, here...");
    return generatePassword();
  }
  
  if (lowerChars || upperChars || specialChars || numberChars) {
     if (lowerChars) {possibleChars = possibleChars.concat(isLower);
  }  if (upperChars) {possibleChars = possibleChars.concat(isUpper);
  }  if (specialChars) {possibleChars = possibleChars.concat(isSpecial);
  }  if (numberChars) (possibleChars = possibleChars.concat(isNumber));
    console.log(possibleChars);
    for (i=0; i<passwordLength; i++) {

      password = password.concat(randoChars(possibleChars));
    }
    return password;
  }
  
  function randoChars(arr) {
    var randoIndex = Math.floor(Math.random() * arr.length);
    var randoElement = arr[randoIndex];
    return randoElement;
    }
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
generateBtn.addEventListener("click", generatePassword);