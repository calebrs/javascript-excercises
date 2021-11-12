/*
Problem:
input: an array, an object
output: a greeting that uses the person's name and title
rules
object contains: title and occupation
array contains: person's full name ,seperated by commas


Examples: SEE CODE



Data STructures:
objects for occuation and title
array for name
string for output
way to access the inputs


Algorithm:
save the name to a variable by joining the array together by spaces
return the greeting useing a template literal uinsg the name variable, and accessing
the properties of the  object


*/
function greetings(nameArray, descriptObject) {
  let name = nameArray.join(' ');
  return `Hello, ${name}! Nice to have a ${descriptObject.title} ${descriptObject.occupation} around.`
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.