// Variables created
var generateBtn = document.querySelector("#generate");
var accept;
var options;
var approveNumber;
var approveUppercase;
var approveLowercase;
var approveSpecial;

// What is being held in each array.
// Number array.
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Capitlaized letters array.
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Lowercase letters array.
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Special characters array.
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

// This function will basically run the code that will end up creating a random password off of the user's input.
function generatePassword() {
  // Gives the user input instructions
  accept = parseInt(prompt("Enter the amount of characters in your new password between 8 and 128."));

  // If the user does not follow the user input instructions this coude will run giving the user a response.
  // If the user chooses input which is not 8, 128, or a number then the this code will respone to the user.
  if (!accept) {
    alert("Please enter a value");
  } else if (accept < 8 || accept > 128) {
    // If the user chooses input that is less than 8 or greater than 128, then this code will run to give a response to the user.
    accept = parseInt(promt("Enter the amount of characters in your new password between 8 and 128."));
  } else {
    // If all user input is put in properly, then the JavaScript code will run and ask the user what they would want in their password.
    approveNumber = confirm("Will this password contain numbers?")
    approveUppercase = confirm("Will this password contain capitalized letters?")
    approveLowercase = confirm("Will this password contain lowercase letters?")
    approveSpecial = confirm("Will this password contain special characters?")
  };

  // Used when the user denies all options to the required criteria
  if (!approveNumber && !approveUppercase && !approveLowercase && !approveSpecial) {
    options = alert("You must choose a criteria! Please Retry.");
  }
  // Next are window prompts that appear to get user input for the password(s).
  // If the user choses to pick all options.
  else if (approveNumber &&  approveUppercase && approveLowercase && approveSpecial) {
    options = special.concat(number, uppercase, lowercase);
  }
  // If the user choses three options out of the four.
  // Depending on the user input, these outcomes are possible when the user choses 3 of the options.
  else if (approveNumber &&  approveUppercase && approveLowercase) {
    options = special.concat(number, lowercase);
  }
  else if (approveNumber &&  approveUppercase && approveSpecial) {
    options = special.concat(number, uppercase);
  }
  else if (approveNumber && approveSpecial && approveLowercase) {
    options = special.concat(uppercase, lowercase);
  }
  else if ( approveUppercase && capproveSpecial && approveLowercase) {
    options = number.concat(uppercase, lowercase);
  }
  // If the user choses two options out of the four.
  // Depending on the user input, these outcomes are possible when the user choses two of the options.
  else if (approveNumber &&  approveUppercase) {
    options = special.concat(number);
  } else if (approveNumber && approveSpecial) {
    options = special.concat(uppercase);
  } else if (approveNumber && approveLowercase) {
    options = special.concat(lowercase);
  } else if (approveSpecial &&  approveUppercase) {
    options = uppercase.concat(number);
  } else if (approveSpecial && approveLowercase) {
    options = uppercase.concat(lowercase);
  } else if ( approveUppercase && approveLowercase) {
    options = number.concat(lowercase);
  }
  // If the user choses one option out of the four.
  // Depending on the user input, these outcomes are possible when the user choses that one of the option.
  else if (approveNumber) {
    options = special;
  }
  else if (approveUppercase) {
    options = number;
  }
  else if (approveSpecial) {
    options = uppercase;
  }
  else if (approveLowercase) {
    options = lowercase;
  };

  // As the password is created, this password variable will be responisble for adding the password into the placeholder box.
  var newPassword = [];

  // Using this for loop will help to create the random password
  // This for loop uses math to randomly select whichever character to put on the user's password, based on the user input.
  for (var i = 0; i < accept; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    newPassword.push(pickOptions);
  }

  // Converting the password array as a string will allow the password to be placed in the place holder as a string.
  var code = newPassword.join("");
  UserInput(code);
  return code;
}

// Write the new password to the password input
function UserInput(code) {
  document.getElementById("password").textContent = code;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  code = generatePassword();
  document.getElementById("password").placeholder = code;
});