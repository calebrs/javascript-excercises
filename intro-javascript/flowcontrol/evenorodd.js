function evenOrOdd(num){
  if (typeof num !== 'number'){
    console.log('Error: input is not a number');
  } else {
    num % 2 ? console.log('Odd') : console.log('Even');
  }
}

evenOrOdd('8');