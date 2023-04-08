/*
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
var user = {};
user["name"] = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);
/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/
var isEmpty = function (obj) {
    for (var el in obj) {
        return false;
    }
    return true;
};
/*
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/
var sumSalaries = function (obj) {
    var res = 0;
    for (var num in obj) {
        res += obj[num];
    }
    return res;
};
console.log(sumSalaries({
    1: 100,
    2: 300,
    4: 200
}));
var multiplyNumeric = function (obj) {
    for (var el in obj) {
        if (typeof obj[el] === "number") {
            obj[el] *= 2;
        }
    }
};
var info = {
    pete: 300,
    am: 200,
    me: "ihor"
};
multiplyNumeric(info);
console.log(info);
