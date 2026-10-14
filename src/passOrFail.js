/* 
3. Pass or Fail
Input a student's score. If the score is ≥ 60, display "Pass"; otherwise, display "Fail".
*/

let score = 80; // set score here

if (score >= 60 && score <= 100) {
  console.log("Pass");
} else if (score < 60 && score >= 0) {
  console.log("Fail");
} else {
  console.log("invalid");
}
