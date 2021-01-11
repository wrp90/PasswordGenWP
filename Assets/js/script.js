// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symValue = ['!','@','#','$','%','^','&','*','(',')'];
var capitalValue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numValue = ['1','2','3','4','5','6','7','8','9','0'];
var passFinal = []
var passGen = ""


function generatePassword() {
  var passLength = Number(prompt("How many characters would you like your password to be?")); { 
    if (isNaN(passLength)) {
      alert("Your input must be a number");
      return null
    } else if (passLength < 8) {
      alert("Your password must be greater than 8 characters");
      return null
    } else if (passLength > 128) {
      alert("Your password must be less than 128 characters");
      return null
    }
  }
  var specialCharacters = confirm("Would you like special characters?");
  var upperCase = confirm("Would you like upper case letters?");
  var numbers = confirm("Would you like numbers?");
  var passFinal = []
  if (specialCharacters && upperCase && numbers == true) {
    passFinal = passFinal.concat(symValue).concat(capitalValue).concat(numValue);
    } else if (specialCharacters && uppercase == true) {
    passFinal = passFinal.concat(symValue).concat(capitalValue);
    } else if (upperCase && numbers == true) {
    passFinal = passFinal.concat(upperCase).concat(numValue);
    } else if (specialCharacters && numbers == true) {
    passFinal = passFinal.concat(symValue).concat(numValue);
    } else if (numbers == true) {
    passFinal = passFinal.concat(numValue);
    } else if (uppercase == true) {
    passFinal = passFinal.concat(capitalValue);
    } else if (specialCharacters == true) {
    passFinal = passFinal.concat(symValue);
    }
    passwordGen(passFinal, passLength) 
}

function passwordGen(passFinal, passLength) {
  var passGen = ""
    for (var i = 0; i < passLength; i++) {
    var rand = Math.floor(Math.random() * passFinal.length);
    var arrayGen = passFinal[rand];
    passGen += arrayGen
    }
  // } for (var i = 0; symValue.length < passLength; i++) {
  //   var rand = Math.floor(Math.random() * passFinal.length);
  //   var arrayGen = passFinal[rand];
  //   passGen += arrayGen
  // } for (var i = 0; numValue.length < passLength; i++) {
  //   var rand = Math.floor(Math.random() * passFinal.length);
  //   var arrayGen = passFinal[rand];
  //   passGen += arrayGen
  // } for (var i = 0; capitalValue.length < passLength; i++) {
  //   var rand = Math.floor(Math.random() * passFinal.length);
  //   var arrayGen = passFinal[rand];
  //   passGen += arrayGen
  // } 
  console.log(passGen)
  return passGen;
} 

console.log(passwordGen)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);













