/**
 *19. Password Validation
A password must contain at least 8 characters. Less than 8 → "Too short"; 8–11 → "Moderate"; ≥ 12 →
"Strong". Bonus: check whether the password contains a number.
 */


const prompt = require('prompt-sync')();
const password = prompt('Password: ')
const checkPw = password.length;

if (checkPw < 8) {
  console.log("Too Short");
} else if (checkPw >= 8 && checkPw <= 11) {
  console.log("moderate");
} else {
  console.log("strong");
    if (password.search(/\d/) !== -1) {
    console.log("Password mengandung angka");
    } else {
      console.log("tidak mengandung angka");
    }
}


