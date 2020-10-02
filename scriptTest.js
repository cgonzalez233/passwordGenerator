// Assignment Code
var generateBtn = document.querySelector("#generate");
var userChoice = prompt("How long would you like your password?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(userChoice.length) {
  var length = userChoice.charAt(),
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_{|}~",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {https://cgonzalez233.github.io/
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}