function factorial(number) {
  
  if (number <= 1) {
    return 1;
  }
  return number * (factorial(number - 1));
  
  
  
  
  
  //let factorial = 1;
  //for (let index = 1; index <= number; index += 1) {
  //  factorial *= index; 
  //}
  //console.log(factorial);
}

console.log(factorial(5));