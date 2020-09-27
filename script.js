// Assignment Code
var generateBtn = document.querySelector("#generate");
var passChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];

// Write password to the #password input

function generatePassword() {
  var userChoice = prompt("Pass?");
  var passLength = userChoice;
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_{|}~";
  for (var i = 0; i<passLength; i++){
    return charset.charAt(Math.floor(Math.random() * charset.length));
  }
}


// function generatePassword() {
//   var userChoice = prompt("How long would you like your password?")
//   var passLength = userChoice,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_{|}~",
//       retVal = "";
//   for (var i = 0; i < passLength; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * charset.length));
//   }
//   return retVal;
// }

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);