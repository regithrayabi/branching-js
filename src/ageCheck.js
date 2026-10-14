/*
4. Age Check
Input a person's age. If the age is ≥ 17, display "Eligible for an ID card"; otherwise, display "Not eligible for an ID
card".
*/

let age = -1;

if (age >= 17) {
  console.log("Eligible for an ID card");
} else if (age < 17 && age >= 0) {
  console.log("Not eligible for an ID card");
} else if (age < 0) {
  console.log("not born or IDK");
} else {
  console.log("invalid");
}
