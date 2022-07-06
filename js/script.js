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
