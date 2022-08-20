// Assignment code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button


// Write password to the #password input


  // trying to put most everything inside of this function below;

  //  VARIABLES needed -
  //      -characters of lowercase, upper, numeric, and special
  // var upperChars = confirm("Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO");
  // var lowerChars = confirm("Would you like to include lower case letters? \nOK for YES, Cancel for NO");
  // var  numbers = confirm("Would you like to include numbers in your password? \nOK for YES, Cancel for NO");
  // var specialChars = confirm("Would you like to include special characters? \nOK for YES, Cancel for NO");


    // all possible variables here:
    var isLower = "abcdefghijklmnopqrstuvwxyz".split("");
    var isUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var isSpecial = " !@#$%^&*()_-+=\"'{/}:;?>.<,".split("");
    var isNumber = "1234567890".split("");
    var minChars = 8;
    var maxChars = 128;

    var masterArray = [isLower, isUpper, isSpecial, isNumber];
    var password = "";

    
    function generatePassword() {
      var passwordLength = parseInt(prompt("How long would you like your password to be? Be sure to pick a number between 8 and 128."));
      var lowerChars = confirm("Would you like to include lower case letters? \nOK for YES, Cancel for NO");
      var upperChars = confirm("Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO");
      var specialChars = confirm("Would you like to include special characters? \nOK for YES, Cancel for NO");
      var numberChars = confirm("Would you like to include numbers in your password? \nOK for YES, Cancel for NO");
      
      if (passwordLength < minChars || passwordLength > maxChars){
        prompt.passwordLength;
        return alert("Please select a number between 8 and 128.")}

      if (!specialChars && !numberChars && !lowerChars && !upperChars)
        alert(
          "Choose at least one character type for your password. We believe in you..."
        );

        console.log("hello");
      // return generatePassword();

    // Now, in the same function, test which character types user selected and add them to a string
    if (lowerChars || upperChars || specialChars || numberChars) {
      if (lowerChars) {
        password.concat.isLower;
      }
      if (upperChars) {
        password.concat.isUpper;
      }
      if (specialChars) {
        password.concat.isSpecial;
      }
      if (numberChars) {
        password.concat.isNumber;
      }
    return generatePassword();
    
    // now, the var password contains all characters based on user's choices. USE math.method to randomly select characters from VAR PASSWORD based on the number of CHARACTERS the user chose:
    function randoPass() {
      for (var i = 0; i < password.length; i++) {
        masterArray.push(password[i]);
      }
      function writePassword() {
        var password = generatePassword();
        passwordText.textContent = password;
      }
    }
  }
  // generateBtn.addEventListener("click", writePassword);
}

