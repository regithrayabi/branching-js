/* 
 11. Simple Login
Create a login system with username "admin" and password "12345". If both are correct, display "Login
successful". Also distinguish between an incorrect username and an incorrect password
 */

const prompt = require("prompt-sync")();

const username = prompt('username: ');
const password = prompt('password: ');

if (username == "admin" && password == "12345") {
    console.log("Login Sucessful");
} else if (username == "admin" && password != "12345") {
    console.log("password incorrect")
} else {
    console.log('username incorrect')
}
