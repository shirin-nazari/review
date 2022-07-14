// in Math random *6 in means of end 6 => and plus 1 means start 1
const gust = Math.floor(Math.random() * 6 + 1);
const gust2 = Math.floor(Math.random() * 6 + 1);
console.log(`you just gust => ${gust} ******* gust 2 => ${gust2}`);

// >= bozorg tar mosavi
// <= kochik tar mosavi

/* -------------------------------- //  alert ------------------------------- */
// the massage with user,, show massage of browser
// alert('hello');
// alert('wowwwwwwwwwwwwwwwwwwww I am student');

/* --------------------------------- prompt --------------------------------- */
// when of user text into input
// let prompter = prompt('if you sign up???????');
// console.log(prompter);  // harchi ke karbar type kone ro dar console neshon mide

/* -------------------------------- parseInt -------------------------------- */
// string convert integer
let integer = parseInt(' 0xF'); // number =>15
console.log(integer); //number=>15
console.log(typeof integer); //number
let number = '80';
console.log(number + 20); //8020
console.log(parseInt(number) + 20); //100
let age = 10;

if (age >= 0 && age <= 5) {
  console.log('your ticket is free');
} else if (age > 5 && age <= 10) {
  console.log('£10 please.');
} else if (age > 10 && age <= 65) {
  console.log('£20 please');
} else {
  console.log('your ticket is free');
}

// codewars
// 7 kyu
// Training JS #33: methods of Math---max() min() and abs()
function maxMin(arr1, arr2) {
  const arr = arr2.map((v, i) => v - arr1[i], 0);
  return [
    Math.max(...arr.map((v) => Math.abs(v))),
    Math.min(...arr.map((i) => Math.abs(i))),
  ];
}
// function sum() {
//   console.log(arguments);
// }
// sum();

function sum(...nums) {
  console.log(nums);
  return console.log(nums.reduce((acc, curr) => acc + curr));
}

// sum(1, 2, 3, 4, 5, 6, 100);

//$ ORDER MATTERS:

// function raceResults(gold, silver, ...others) {
//   console.log(`gold medal goes to: ${gold}`);
//   console.log(`silver medal goes to: ${silver}`);
//   console.log(`Thanks to: ${others}`);
// }
// raceResults('Schumacher');
// raceResults('Schumacher', 'Hamilton');
// raceResults('Schumacher', 'Hamilton', 'Vette', 'Roseberg', 'Button');

function raceResults2(...others) {
  console.log(`gold medal goes to: ${others[0]}`);
  console.log(`silver medal goes to: ${others[1]}`);
  console.log(`Thanks to: ${others}`);
}
raceResults2('Schumacher', 'Hamilton', 'Vette', 'Roseberg', 'Button');
