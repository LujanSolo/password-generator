  // at start, ask user how many characters they want in password
var numChars = prompt("How many characters would you like your password to be? Note: Password length must be at least 8 and no more than 128 characters.");

//validate that they've got at least that much right
if (numChars < 8 || numChars > 128) {
  alert("Please select a number between \n8 and 128 \n for password length");
}
//  VARIABLES needed -  
//      -characters of lowercase, upper, numeric, and special
var upperChars = confirm("Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO");
var lowerChars = confirm("Would you like to include lower case letters? \nOK for YES, Cancel for NO");
var  numbers = confirm("Would you like to include numbers in your password? \nOK for YES, Cancel for NO");
var specialChars = confirm("Would you like to include special characters? \nOK for YES, Cancel for NO");


//  an empty array to hold user's selected characters
var charOptions = [];
  
//    then, CHECK to see if all user entries are valid (function) 
function validateInput (upperChars) {}


// function checkUserInput(numChars) {
    //   parseInt(chars)?
    //   if (chars < 8 || chars > 128) { 
    //   return null
    //    }
    //  }

    // THEN make VARIABLES for types of characters
    //  var specialChars = confirm("Want special characters in your password?")
    //  var numberChars = confirm("Want numbers in your password?")
    //  var lowerChars = confirm("Want lowercase characters in your password?")
    //  var upperChars = confirm("Want uppercase characters in your password?")
    //  CHECK to see that at least 1 option is TRUE
    //  or if (!specialChars && !numberChars && !lowerChars && !upperChars) {
    //   alert("Choose at least one character type for your password. We believe in you.")
    //     START OVER return to start variable
    
    //  once validates, push info to array (charOptions)
    // if (specialChars) {
    // charOptions.concat(specialCharsArray)
    // }
    // if (numberChars) {
    // charOptions.concat(numberCharsArray)
    // }
    // if (lowerChars) { 
    // charOptions.concat(lowerCharsArray)
    // }
    // if (upperChars){
    //  charOptions.concat(upperCharsArray)
    // }

    // THEN take their parameters and create a random sequence from their input or charOptions (LOOP thru the array options to create random characters)
    // THEN
    // push those choices to a passwordArray = []

    // return passwordArray.join()
    

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
