/*
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/


var lowerCaseOptions = 'qwertyuiopasdfghjklzxcvbnm';
var upperCaseOptions = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var numberOptions = '1234567890';
var specialOptions = '!@#$%^&*()_+",.-/?:;<=>[]{}`|~';


function generatePassword() {
  // 1. prompt the user for the password criteria
  //    a. password length from 8 to 128 characters
  var charLength = Number(prompt('How many characters would you like your password to contain? Choose a number from 8 to 128.'));
  
  //    b. confirm user inputs a number from 8 to 128
  if (!charLength) {
    alert('Please enter a password length.');
    return charLength = Number(prompt('How many characters would you like your password to contain? Choose a number from 8 to 128.'));
  }
  
  // ??? this only works is the page is refreshed - if user re-enters a number, it appends # to page
  if (charLength < 8 || charLength > 128) {
    alert('You must enter a number from 8 to 128.');
    return charLength = Number(prompt('How many characters would you like your password to contain? Choose a number from 8 to 128.'));
  } else {
    //    c. lowercase, uppercase, numbers, special characters
    var hasLowercase = confirm('Click OK to confirm including lowercase characters.');
    var hasUppercase = confirm('Click OK to confirm including uppercase characters.');
    var hasNumber = confirm('Click OK to confirm including numeric characters.');
    var hasSpecial = confirm('Click OK to confirm including special characters.');
  }
  
  // 2. validate the input
  //    a. confirm user selected at least one character type
  
  if (!hasLowercase && !hasUppercase && !hasNumber && !hasSpecial) {
    alert('You must select at least one character type.')
    hasLowercase = confirm('Click OK to confirm including lowercase characters.');
    hasUppercase = confirm('Click OK to confirm including uppercase characters.');
    hasNumber = confirm('Click OK to confirm including numeric characters.');
    hasSpecial = confirm('Click OK to confirm including special characters.');
  }
  
  //    b. concatenate user selections & filter out cancels
  // ??? but will this have app make sure there's at least one of each character selected (or is that beyond the scope of this assignment?)

  var passwordChar = '';
  
  if (hasLowercase) {
    passwordChar += lowerCaseOptions;
  }
  
  if (hasUppercase) {
    passwordChar += upperCaseOptions;
  }
  
  if (hasNumber) {
    passwordChar += numberOptions;
  }
  
  if (hasSpecial) {
    passwordChar += specialOptions;
  }
  
  console.log(passwordChar);

  // 3. generate password based on criteria
  //    a. initialize a password variable string to continuously build on
  var generatedPassword = '';

  //    b. loop over charLength & call generator function for each type
  for (var i = 0; i < charLength; i++) {
    generatedPassword += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }

  console.log(generatedPassword);
  
  return generatedPassword;

  // 4. display password to the page
}

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
