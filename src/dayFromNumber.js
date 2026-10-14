/*10.
Day from Number
Input a number from 1–7 and display the corresponding day of the week. If the number is outside 1–7, display
"Invalid day".
*/

const prompt = require("prompt-sync")({sigint:true});
const inputNumber = Number(prompt("Input a number from 1-7: "));

switch (inputNumber) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("invalid")
        break;
}

