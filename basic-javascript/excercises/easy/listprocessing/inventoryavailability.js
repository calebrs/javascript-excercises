/*
Problem:
input: item and inventory
output: true or false whether the itme is available

Examples


Algorithm:
filter out all the tranactions i need to view yusing the transactions for method
put all the quantities into an array but if they're negative or not
if the array reduced is equal to or less than 0 then retun false

*/
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(transID, transactions) {
  return transactions.filter(trans => trans.id === transID);
}

function isItemAvailable(transID, transactions) {
  let transactionsFiltered = transactionsFor(transID, transactions);
  let inOutQuantities = transactionsFiltered.map(trans => trans.movement === 'out' ? trans.quantity * -1 : trans.quantity);

  return inOutQuantities.reduce((accum, num) => accum + num, 0) >= 0;
}



console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true