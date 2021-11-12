/*
Problem:
input name
output: the name but the first and last name are switched and have a comma int he middle

Examples:


*/
function swapName(name) {
  return name.split(' ').slice(-1).join('') + ', ' + name.split(' ').slice(0, -1).join(' ');
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Roberts, Joe"