/*
Problem:
input: two dimensional array of a grocery list
output: a one dimensional array where each fruit apears the number of times as its quantity

Examples:


Algorithm:
create fruit array

iterate through the input array
   start loop that runs current element indx 1 times
    on each iteration, push the first element to the fruit array

return the fruit array

*/
function buyFruit(arr) {
  let fruitArray = [];

  for (let indx = 0; indx < arr.length; indx += 1) {
    for (let indx2 = 0; indx2 < arr[indx][1]; indx2 += 1) {
      fruitArray.push(arr[indx][0]);
    }
  }

  return fruitArray;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]