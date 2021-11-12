//refactor without grabbing each element of the array
function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
// logs: Kirk, James T.