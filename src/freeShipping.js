/*
5. Free Shipping
Input the total purchase amount. If the amount is ≥ 100,000, display "Free Shipping"; otherwise, display
"Shipping Fee Applies".
*/

let totalPurchaseAmount = 90000; //set value here
const bareMinFreeShipping = 100000;
if (totalPurchaseAmount >= bareMinFreeShipping) {
  console.log("Free Shipping");
} else {
  console.log("Shipping Fee Applies");
}
