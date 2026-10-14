/*
9. Shopping Discount
Determine the discount based on the total purchase: ≥ 1,000,000 = 20%, ≥ 500,000 = 10%, ≥ 250,000 = 5%,
below that = no discount. Display the final price after the discount.
*/

const prompt = require("prompt-sync")({sigint:true});

const totalPurchase = Number(prompt("Masukan Total Harga: "));
const hasil = discount(totalPurchase);

console.log("Status:", hasil.keterangan);
console.log("Harga Setelah Diskon:", hasil.hargaAkhir);


function discount(totalPurchase) {
  let struct = ""
  if (totalPurchase >= 1000000) {
    struct = "diskon 20%"
    totalPurchase -= totalPurchase * (20 / 100);
  } else if (totalPurchase >= 500000) {
     struct = "diskon 10%"
    totalPurchase -= totalPurchase * (10 / 100);
  } else if (totalPurchase >= 250000) {
     struct = "diskon 5%"
    totalPurchase -= totalPurchase * (5 / 100);
  } else {
    console.log("Invalid");
  }
  return{
    keterangan: struct,
    finalPrice: totalPurchase
  } 
}
