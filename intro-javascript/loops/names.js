let names = ['James', 'Caleb', 'Nathan', 'Robert', 'Mellisa'];
let upperNames = [];

for (let index = 0; index <= names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);