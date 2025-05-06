// let storedPassword = 1234;
// let typedPassword = 345;

// if (storedPassword == typedPassword) {
//   alert("password is correct");
// } else {
//   alert("password is incorrect");
// }

// let average = 90;
// let studentScore = 70;

// if (studentScore < average) {
//   alert(`${studentScore} is less than ${average} so you fail`);
// } else {
//   alert("You pass");
// }

let storedUsername = parseInt(prompt("create username"));

let inputUsername = parseInt(prompt("login with your username"));

if (storedUsername == inputUsername) {
  alert("password is correct");
} else {
  alert("recheck your input");
}

console.log(inputUsername);
console.log(storedUsername);
