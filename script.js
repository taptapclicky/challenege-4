// Assignment Code
function writepassword(){}

var number = "1234567890"

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowercase = "abcdefghijklmnopqrstuvwxyz"

var special = "!@#$%^&*()_+?"

var passwordLength = prompt("choose password length between 8 and 128 characters");

if (passwordLength >= 8 && passwordLength <= 128) {

var lcc = confirm("Will this password contain lowercase characters?");

var ucc = confirm("will this password contain uppercase characters?");

var sc = confirm("will this password contain special characters?");

var num = confirm("will this password contain numbers?");}
if (lcc === false && ucc === false && sc === false && num ===false){alert("select minimum of one")
location.reload()};

if (lcc === true) {
  var lowercasePassword =[];
  for (i = 0; i < passwordLength; i++) {
  var lowercaseAyPassword = 0;
    lowercaseAyPassword = Math.floor(Math.random() * lowercase.length);
    lowercasePassword.push(lowercase[lowercaseAyPassword]);

  }
}

if (ucc === true) {
  var uppercasePassword =[];
  for (i = 0; i < passwordLength; i++){
  var uppercaseAyPassword = 0;
    uppercaseAyPassword = Math.floor(Math.random() * uppercase.length);
    uppercasePassword.push(uppercase[uppercaseAyPassword]);
  }

  }
  if (sc === true) {
    var scPassword=[];
    for (i = 0; i < passwordLength; i++){
    var scAyPassword = 0;
      scAYPassword = Math.floor(Math.random() * special.length);
      scPassword.push(special[scAyPassword]);
  
    }
  }
    if (num === true) {
      var numPassword=[];
      for (i = 0; i < passwordLength; i++){
      var numAyPassword= 0;
        numAyPassword = Math.floor(Math.random() * number.length);
        numPassword.push(number[numAyPassword]);
    
      }
    }

var prompts = [];
if (lcc === true) {
  prompts.push("lowercase characters")
};

if (ucc === true) {
  prompts.push("uppercase characters")
};

if (sc === true) {
  prompts.push("special characters")
};

if (num === true) {
  prompts.push("numbered characters")
};

var join = [];
var joinAll = join.concat(lowercasePassword, uppercasePassword, scPassword, numPassword)
var joinAllTogether = joinAll.filter(function(x){return x !== undefined})

var pw = []
for (i = 0; i< passwordLength; i++) {
var pwd = 0;
pwd = Math.floor(Math.random() * joinAllTogether.length);
pw.push(joinAllTogether[pwd]);
}

var endString = String(pw)
var filteredStringEndPass = endString.replaceAll(",", '');

var passwordText = document.querySelector('#password');
passwordText.textContent = filteredStringEndPass;


var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writepassword);

