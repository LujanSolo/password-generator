// Assignment code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
  var password = generatePassword();
// Add event listener to generate button

// Write password to the #password input

// all possible variables here:
var isLower = "abcdefghijklmnopqrstuvwxyz".split("");
var isUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var isSpecial = " !@#$%^&*()_-+=\"'{/}:;?>.<,".split("");
var isNumber = "1234567890".split("");
var minChars = 8;
var maxChars = 128;

var masterArray = [isLower, isUpper, isSpecial, isNumber];

function generatePassword() {
  var allInput = "";
  var passwordLength = parseInt(
    prompt(
      "How long would you like your password to be? Be sure to pick a number between 8 and 128."
    )
  );
  if (passwordLength < minChars || passwordLength > maxChars) {
    prompt.passwordLength;
    return alert("Please select a number between 8 and 128.");
  };
  
  var lowerChars = confirm(
    "Would you like to include lower case letters? \nOK for YES, Cancel for NO"
  );
  var upperChars = confirm(
    "Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO"
  );
  var specialChars = confirm(
    "Would you like to include special characters? \nOK for YES, Cancel for NO"
  );
  var numberChars = confirm(
    "Would you like to include numbers in your password? \nOK for YES, Cancel for NO"
  );

  if (lowerChars || upperChars || specialChars || numberChars) {
    if (lowerChars) {
      allInput.concat.isLower;
    };
    if (upperChars) {
      allInput.concat.isUpper;
    };
    if (specialChars) {
      allInput.concat.isSpecial;
    };
    if (numberChars) {
      allInput.concat.isNumber;
    }
  };
  
  function writePass() {
    randoSelects = [Math.floor(Math.random() * masterArray)];
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", generatePassword);

  // console.log("hello");
  // return generatePassword();

  // Now, in the same function, test which character types user selected and add them to a string

  // return generatePassword();

  // // now, the var password contains all characters based on user's choices. USE math.method to randomly select characters from VAR PASSWORD based on the number of CHARACTERS the user chose:
  // function randoPass() {
  //   for (var i = 0; i < password.length; i++) {
  //     masterArray.push(password[i]);
  //   }

  // }

