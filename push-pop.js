var numbers = [78, 98, 45];
// use push to add element to an array as the last element array
numbers.push(63);
// console.log(numbers);
var friends = ["balam", "kalam", "salam"];
friends.push("gelam");
friends.push("pailam");
// console.log(friends);

// use pop to remove last element
console.log(numbers);
numbers.pop();
var element = numbers.pop();
console.log(numbers);
console.log(element);

// Add to the start of an array

numbers.unshift("Mango");
console.log(numbers);

// Add to specified location
var list = [10, 200, 300, 500];

list.splice(3);
console.log(list);
