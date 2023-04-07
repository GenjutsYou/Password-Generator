// Assignment code here

// Define arrays of character types
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define function to generate password
function generatePassword() {
  // Prompt for password length
  var passwordLength = getPasswordLength();

  // Prompt for character types
  var selectedTypes = getCharacterTypes();

  // Generate password
  var characters = "";
  var password = "";
  selectedTypes.forEach(function(type) {
    characters += type;
  });

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Define function to prompt for password length
function getPasswordLength() {
  var passwordLength = parseInt(prompt("Enter password length (8-128 characters):"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input. Please enter a valid password length.");
    return getPasswordLength();
  }
  return passwordLength;
}

// Define function to prompt for character types
function getCharacterTypes() {
  var characterTypes = [
    lowercaseCharacters,
    uppercaseCharacters,
    numericCharacters,
    specialCharacters
  ];
  var selectedTypes = [];
  characterTypes.forEach(function(type) {
    var include = confirm("Include " + type + " characters? (OK for Yes, Cancel for No)");
    if (include) {
      selectedTypes.push(type);
    }
  });

  if (selectedTypes.length === 0) {
    alert("At least one character type must be selected.");
    return getCharacterTypes();
  }

  return selectedTypes;
}
