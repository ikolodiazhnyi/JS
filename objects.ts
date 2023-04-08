/* 
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user = {};
user["name"] = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

/* 
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

const isEmpty = (obj: Object): boolean => {
  for (let el in obj) {
    return false;
  }
  return true;
};

/* 
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

const sumSalaries = (obj: Object): number => {
  let res = 0;

  for (let num in obj) {
    res += obj[num];
  }

  return res;
};

console.log(
  sumSalaries({
    1: 100,
    2: 300,
    4: 200,
  })
);

/* 
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/

const multiplyNumeric = (obj: Object): void => {
  for (let el in obj) {
    if (typeof obj[el] === "number") {
      obj[el] *= 2;
    }
  }
};

let info = {
  pete: 300,
  am: 200,
  me: "ihor",
};

multiplyNumeric(info);

console.log(info);
