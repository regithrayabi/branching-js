/*
Input two numbers, a and b. Determine which number is larger. If they are equal, display "Both numbers are
equal".
*/

/*
const a = 8;
const b = 8;

if (a > b) {
  console.log(a, "bigger than", b);
} else if (a < b) {
  console.log(b, "bigger than", a);
} else if (a == b) {
  console.log(a, "equals", b);
} else {
  console.log("invalid");
}
*/

//this code using prompt-sync package
const prompt = require("prompt-sync")();

const a = Number(prompt("Masukkan angka pertama: "));
const b = Number(prompt("Masukkan angka kedua: "));

if (isNaN(a) || isNaN(b)) {
  console.log("Error: Mohon masukkan angka yang valid!");
} else {
  if (a > b) {
    console.log(a, "bigger than", b);
  } else if (a < b) {
    console.log(a, "smaller than", b);
  } else {
    console.log(a, "equals", b);
  }
}
