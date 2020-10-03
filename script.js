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

  var userChoice = prompt("How long would you like your password?");
  //if else statement to prevent someone from putting in something other than a number
  if (!isNaN(Number(userChoice)) === true){
    var passLength = parseInt(userChoice);
    var password = ""
    for (var i = 0; i <passLength; i++){
    password += newArr[Math.floor(Math.random() * newArr.length)]
    }
    return password
  }else {
    alert("Please enter a number!")
  };

}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

