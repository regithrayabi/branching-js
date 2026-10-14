/* 13. Free Shipping + Membership
Given totalPurchase and isMember: if the purchase is ≥ 100,000 OR the customer is a member, provide free
shipping. Otherwise, apply a shipping fee.
*/

const prompt = require('prompt-sync')({sigint:true});
const totalPurchase  = Number(prompt('Total Purchase: '))
const isMemberInput = prompt('Member? (Yes or No): ').trim().toLowerCase();
    
const isMember = isMemberInput === 'yes';

if (totalPurchase >= 100000 || isMember) {
    console.log('Free Shipping');
} else {
    console.log('You Have a Shipping Fee');
}