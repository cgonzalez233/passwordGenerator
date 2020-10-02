// Assignment Code
// Variables containing each type of character
var generateBtn = document.querySelector("#generate");
var passLower = "abcdefghijklmnopqrstuvwxyz".split("")
var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var passNum = "0123456789".split("")
var passSym = "!#$%&'()*+-./:;<=>?@[]^_{|},~".split("")

//Combining each of the character arrays via .concat
let newArr = [];
newArr = newArr.concat(passLower);
newArr = newArr.concat(passUpper);
newArr = newArr.concat(passNum);
newArr = newArr.concat(passSym);


// Write password to the #password input

function generatePassword() {
  //Prompt to decide the password length
  var userChoice = prompt("How long would you like your password?");
  var passLength = parseInt(userChoice);
  // Added variable -password- to give a place for the characters to go
  var password = ""
  for (var i = 0; i <passLength; i++){
  password += newArr[Math.floor(Math.random() * newArr.length)]
  }
  return password
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);