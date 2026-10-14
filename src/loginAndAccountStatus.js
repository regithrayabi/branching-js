/**
 * 15. Login and Account Status
Given username, password, and account status: correct credentials + active account → Login successful;
incorrect credentials → Invalid username or password; correct login but inactive account → Account inactive.
 */

const prompt = require('prompt-sync')();
const correctUsername = "admin";
const correctPassword = "admin";


const inputUsername = prompt('Username: ');
const inputPassword = prompt('Password: ');
const accountStatus = prompt('Account Status (active/inactive): ').trim().toLowerCase();

if (inputUsername !== correctUsername || inputPassword !== correctPassword) {
    console.log('invalid username or password');
} else {
    console.log('correct credentials');
    if (accountStatus === 'active') {
        console.log('login successfull');
    } else {
        console.log('account inactive');
    }
} 