function clone(obj) {
  // TODO
  
  //return Object.create(obj); 
  /*
  ^^^ This solution does not work properly becuase it creates a parent child relationship 
  between the original and the copy, respectively. Therefore if we make changes within the 
  parent to a property that the child inherits then it will modify the child as well.
  */
 
  return Object.assign({}, obj);
  /*
  ^^^ this solution simply copies the values for primitives and the pointers/references for
  objects, but there is no parent childe relationship between the primitives unlike with
  Object.create()
  */
  
  
  /*
  let newObject = {};
  
  for (let item in obj) {
    newObject[item] = obj[item];
  }
  
  return newObject;
  */
  
  /*
  ^^^ this solution simply copies the values for primitives and the pointers/references for
  objects, but there is no parent childe relationship between the primitives unlike with
  Object.create(). Behaves just like Object.assign()
  */
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
clonedPerson.age = 34;

console.log(person);       // 34
console.log(clonedPerson); // 33

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false