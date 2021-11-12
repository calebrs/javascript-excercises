function copyObj(obj, keys) {
  let functionObj = {};
  if (Array.isArray(keys)) {
    for (let i = 0; i < keys.length; i += 1) {
      functionObj[keys[i]] = obj[keys[i]];
    }
  } else {
    functionObj = obj;
  }
  return functionObj;
}


let objToCopy = {
  foo: 1,
  bar: 2,
}



let newObj = copyObj(objToCopy);
console.log(newObj.foo);
console.log(newObj.bar);

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);
console.log(newObj2.bar);