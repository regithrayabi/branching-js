/**16. Parking Fee
Calculate the parking fee: first hour = Rp5,000, each additional hour = Rp3,000, maximum fee = Rp20,000.
Example: 5 hours = Rp17,000 */

const prompt = require('prompt-sync')();
const inputHours = Number(prompt('how long parking (hour): '));

function parkingFee(inputHours) {
  const baseFee = 5000;
  const hourlyRate = 3000;
  const maxFee = 20000;

  const extraHours = inputHours - 1;
  let totalFee = baseFee + (extraHours * hourlyRate);
  return Math.min(totalFee, maxFee)
}

const total = parkingFee(inputHours);
console.log(`Total Fee: Rp ${total.toLocaleString('id-ID')}`);