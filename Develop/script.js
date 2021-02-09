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

//  Add a bunch variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;


//function for length of password

function lengthOfPassword(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength < 8){
      alert("Password length must be between 8-128 characters");
      lengthOfLength();
    }else if (passwordLength > 128){
      alert("Password length must be between 8-128 characters");
      lengthOfLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be between 8-128 characters");
      lengthLength();
    }else{
    alert("The nex tscreens will ask Yes or No quetions to determine the types of characters in your password.");
    }
    return passwordLength;
}


//Function for upercase
function uppercaseOrNah(){
  uppercaseCheck = prompt("Do you want uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Yes or No");
      uppercaseOrNah();

    }else if (uppercaseCheck === "Yes"|| uppercaseCheck==="y" ){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck ==="No" ){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Yes or No");
      uppercaseOrNah();
    }
    return uppercaseCheck;
}

//Function for numbers
function numbersOrNah(){
  numberCheck = prompt("Do you wantnumbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Yes or No");
      numbersOrNah();

    }else if (numberCheck === "Yes" ){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "No" ){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Yes or No");
      numbersOrNah();
    }
    return numberCheck;
}

//Function for special characters _-
function specialOrNah(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Yes or No");
      specialOrNah();

    }else if (specialCheck === "Yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "No" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Yes or No");
      specialOrNah();
    }
    return specialCheck;
}
 //Function for the console log input
 function generatePassword(){
  lengthOfPassword();
  console.log(passwordLength);
  uppercaseOrNah();
  console.log(uppercaseCheck);
  numbersOrNah();
  console.log(numberCheck);
  specialOrNah();
  console.log(specialCheck);

var characters = lowercase;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercase + number + special;

}else if (uppercaseCheck && numberCheck){
  characters += uppercase + number;

}else if (numberCheck && specialCheck){
  characters += number + special;

}else if (uppercaseCheck && specialCheck){
  characters += uppercase + special;

}else if (uppercaseCheck){
  characters += uppercase;

}else if(numberCheck){
  characters += number;

}else if (specialCheck){
  characters += special;

}else{
  characters === lowercase;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
