//Input to be converted into whale talk
let input = 'A whale of a deal!';

//Declare vowels and instantiate result array
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//Split the input into letters
input = input.split("");

//Get E and Us and double
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      resultArray.push(input[i])
    }
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i])
        resultArray.push(input[i])
        break;
    }
  }
}

//Convert result into string, all caps
resultArray = resultArray.join("");
resultArray = resultArray.toUpperCase();

console.log(resultArray)