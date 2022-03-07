// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.getElementById("password").innerHTML = password;
}

function generatePassword() {
  var pass = '';
  var str = '';
  var U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var l = 'abcdefghijklmnopqrstuvwxyz';
  var num = '0123456789';
  var Sp = '~`! @#$%^&*()_-+={[}]|\:<,>.?/';
  
  var passwordlength = document.getElementById("passwordlength").value; 
  var lowercasechar = document.getElementById("lowercasechar").checked; 
  var uppercasechar = document.getElementById("uppercasechar").checked; 
  var numbers = document.getElementById("numbers").checked;
  var specialchar = document.getElementById("specialchar").checked;



  if (lowercasechar == true)  {
    str += l;
  }
  if (uppercasechar == true) {
    str += U;
  }
  if (numbers == true)  {
    str += num;
  }
  if (specialchar == true)  {
    str += Sp;
  }

if (lowercasechar && uppercasechar == true) {
    str = U+l;
}

if (lowercasechar && numbers == true) {
  str = l+num;
}

if (lowercasechar && specialchar == true) {
  str = l+Sp;
}

if (numbers && uppercasechar == true) {
  str = U+num;
}
if (numbers && specialchar == true) {
  str = num+Sp;
}
if (specialchar && uppercasechar == true) {
  str = U+Sp;
}
if (lowercasechar && uppercasechar && numbers == true) {
  str = U+l+num;
}
if (lowercasechar && uppercasechar && specialchar == true) {
  str = U+l+Sp;
}
if (lowercasechar && numbers && specialchar == true) {
  str = l+num+Sp;
}
if (numbers && uppercasechar && specialchar == true) {
  str = U+num+Sp;
}
if (lowercasechar && uppercasechar && numbers && specialchar == true) {
  str = U+l+num+Sp;
}
else {
  
};

document.getElementById('checkboxdisp').innerHTML = str;

  for (i = 1; i <= passwordlength; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      pass += str.charAt(char)
  }
    
  return pass;
}


function showDiv() {
  document.getElementById('pword').style.display = "block";
}

function showDiv2() {
  document.getElementById('pword','form').style.display = "none";
}

function showDiv3() {
  document.getElementById('form').style.display = "block";
}

function showpasswordlength () {
  let inputValue = document.getElementById("passwordlength").value; 
  document.getElementById("passwordlengthdisp").innerHTML = inputValue; 
}

function displaycheckbox () {
  let uppercasechar = document.getElementById("uppercasechar").value; 
  document.getElementById('checkboxdisp').innerHTML = uppercasechar;

}


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", writePassword);