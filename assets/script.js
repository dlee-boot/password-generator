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



var generatePassword = function() {
  var finalPassword;
  var charArray = [];
  var allLetters = "abcdefghijklmnopqrstuvwxyz";
  var allSpecial = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //ask user for password preferences 
  var passwordLength = checkLength();
  var caseLower = confirm("Do you want lowercase letters?");
  var caseUpper = confirm("Do you want uppercase letters?");
  var caseNumeric = confirm("Do you want numbers?");
  var caseSpecial = confirm("Do you want special characters?");

  for (var i = 0; i < passwordLength; i++) {
    var userCustomization = applySelection(caseLower, caseUpper, caseNumeric, caseSpecial);
    switch (userCustomization.toString()) {
      case "L":
        charArray[i] = allLetters.charAt(Math.floor(Math.random() * 26));
        break;
      case "U":
        charArray[i] = allLetters.toUpperCase().charAt(Math.floor(Math.random() * 26));
        break;
      case "S":
        charArray[i] = allSpecial.charAt(Math.floor(Math.random() * 31));
        break;
      case "N":
        charArray[i] = Math.floor(Math.random() * 10);
        break;
      default:
        break;
    }
  }

  finalPassword = charArray.join('');
  return (finalPassword);
};

var checkLength = function() {
  var pwLength = 0;
  while ((pwLength<8) || (pwLength>128)) {
    pwLength = prompt("How long do you want your password to be (8 to 128 characters)");
  }
  return pwLength;
}


var applySelection = function(caseLower, caseUpper, caseNumeric, caseSpecial) {
//Setup array with custom selections
//randomize which custom selection to apply to character location
var customSelection = [];
for (var i=0; i<4; i++) {
  if (caseLower) {
    customSelection[i] = ["L"];
    caseLower = false;
  } else 
      if (caseUpper) {
        customSelection[i] = ["U"];
        caseUpper = false;
      } else
        if (caseSpecial) {
          customSelection[i] = ["S"];
          caseSpecial = false;
        } else
          if (caseNumeric) {
            customSelection[i] = ["N"];
            caseNumeric = false;

          }
}
//  console.log("this is the customSelection array " + customSelection); //which custom selection need to be applied
 customApply = Math.floor(Math.random() * customSelection.length);
//  console.log("this is the specific selection " + customSelection[customApply]); //pick randomized custom selection
 return customSelection[customApply];

}