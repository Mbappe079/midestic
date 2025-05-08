let weight = parseInt(prompt(`Input your weight`));
let height = parseInt(prompt(`Input your height`));

let result = weight / (height * height);

if (result < 18.5) {
  alert(`${result} means you are underweight `);
} else if (result == 18.5 || result <= 24.9) {
  alert(`${result} shows that your weight is normal`);
} else if (result == 25 || result <= 29.9) {
  alert(`${result} shows that you are overweight werey .. go gym🤣`);
} else if (result >= 30) {
  alert(`${result} omoh obesity go kill you o 😂😂`);
}
