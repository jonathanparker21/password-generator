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




function generatePassword() {
  // 1. prompt the user for the password criteria
  //    a. password length from 8 to 128 characters
  var charLength = +prompt('How many characters would you like your password to contain? Choose a number from 8 to 128.'); // add a + in front of prompt to turn it from a string to a number?
  //    b. confirm user inputs a number from 8 to 128
  if (!charLength) {
    alert('Please enter a password length.');
    charLength = prompt('How many characters would you like your password to contain? Choose a number from 8 to 128.');
  } else if (charLength < 8 || charLength > 128) {
    alert('You must enter a number from 8 to 128.');
    charLength = prompt('How many characters would you like your password to contain? Choose a number from 8 to 128.');
  }
  //    c. lowercase, uppercase, numbers, special characters
  var hasLowercase = confirm('Click OK to confirm including lowercase characters.');
  var hasUppercase = confirm('Click OK to confirm including uppercase characters.');
  var hasNumber = confirm('Click OK to confirm including numeric characters.');
  var hasSpecial = confirm('Click OK to confirm including special characters.');
  
  console.log(charLength, hasLowercase, hasUppercase, hasNumber, hasSpecial);
  
  // 2. validate the input
  //    a. confirm user selected at least one character type
  var charTypes = hasLowercase + hasUppercase + hasNumber + hasSpecial;
  if (charTypes === 0) {
      return '';
    }
  //    b. filter out cancels
  // 3. generate password based on criteria
  //    a. initialize a password variable string to continuously build on
  //    b. loop over charLength & call generator function for each type
  // 4. display password to the page
    
  // var generatedPassword = '';

  // var typesArr = [{hasLowercase}, {hasUppercase}, {hasNumber}, {hasSpecial}].filter(item => Object.values(item) [0]);

  // for (let i = 8; i < 129; i += typesCount) {
    //   typesArr.forEach(type => {
      //     var funcName = Object.keys(type)[0];
      //     // console.log('funcName: ', funcName);
      
      //     generatedPassword += randomFunc[funcName]();
      //   });
      // }

  return generatedPassword; 
}




function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial() {
  var specials = '~`!@#$%^&*()_-+=:;';
  return specials[Math.floor(Math.random() * specials.length)];
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
