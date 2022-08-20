// Assignment code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
// trying to put most everything inside of this function below;
  function generatePassword() {
    var minChars = 8;
    var maxChars = 128;
    
    var passwordLength = parseInt(prompt("How long would you like your password to be? Be sure to pick a number between 8 and 128."));
    
// all possible variables here
    
    var isLower = "abcdefghijklmnopqrstuvwxyz";
    var isUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var isSpecial = " !@#$%^&*()_-+=\"'{/}:;?>.<,";
    var isNumber = "1234567890";
    
    var allInput = ""; //a string to hold confirmed data

    var upperChars = confirm("Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO");
    var lowerChars = confirm("Would you like to include lower case letters? \nOK for YES, Cancel for NO");
    var numbers = confirm("Would you like to include numbers in your password? \nOK for YES, Cancel for NO");
    var specialChars = confirm("Would you like to include special characters? \nOK for YES, Cancel for NO");
    
    if (!specialChars && !numberChars && !lowerChars && !upperChars)alert("Choose at least one character type for your password. We believe in you...") 
    return writePassword();
    }
    //validate number of characters
    if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between \n8 and 128 \n for password length")
      return writePassword()
    }

    }
  var passwordText = document.querySelector("#password");


// const keys = {
//   upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lowerCase: "abcdefghijklmnopqrstuvwxyz",
//   number: "0123456789",
//   symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="

// Math.floor(Math.random() * string.length) create a random number between 0 to length of string - 1.
// }
// at start, ask user how many characters they want in password
// var passwordLength = prompt("How many characters would you like your password to be? Note: Password length must be at least 8 and no more than 128 characters.");

//validate that they've got at least that much right
// function checkUserInput(passwordLength) {
//       // parseInt(chars)
//       if (chars < 8 || chars > 128) { 
//       return null
//        }
//      }



//  VARIABLES needed -  
//      -characters of lowercase, upper, numeric, and special
// var upperChars = confirm("Would you like to include UPPERCASE letters? \nOK for YES, Cancel for NO");
// var lowerChars = confirm("Would you like to include lower case letters? \nOK for YES, Cancel for NO");
// var  numbers = confirm("Would you like to include numbers in your password? \nOK for YES, Cancel for NO");
// var specialChars = confirm("Would you like to include special characters? \nOK for YES, Cancel for NO");



//   if (!specialChars && !numberChars && !lowerChars && !upperChars)alert("Choose at least one character type for your password. We believe in you...");
// return generatePassword(); 
// }

//  CHECK to see that at least 1 option is TRUE

    //     START OVER return to start variable

//  an empty array to hold user's selected characters
var charOptions = [];


//    then, CHECK to see if all user entries are valid (function) 
function validateInput (upperChars) {

}



  
    
    
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
    






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
