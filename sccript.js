/*
let js = 'amazing';
console.log(40 + 8 + 23 -10);

// Values and Variables
console.log('Jonas');
console.log(23);

let firstName = "Jonas"

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programer';
let job2 = 'teacher';

console.log(myFirstJob);

//////////////////////////////////////////////////////////// DATA TYPES 12

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//////////////////////////////////////////////////////////// LET, CONST, AND VAR 13

// lET can change
let age = 30;
age = 31;

// CONST cannot be changed or be empty -- MUST BE INTIALIZED
const birthYear = 1991;
// birthYear = 1990; <- NOPE
// const job; <- NOPE

// VAR "old way" | Do not use, just know.
var job = 'programmer';
job = 'teacher';

lastName = 'Grostefon';
console.log(lastName);

//////////////////////////////////////////////////////////// BASIC OPERATORS 14

//MATH OPERATORS

const now = 2037;
const ageGrostefon = now - 1980;
const ageSarah = now - 2018;
console.log(ageGrostefon, ageSarah);

console.log(ageGrostefon * 2, ageGrostefon / 10, 2**3);
// 2 ** 3 means 2 to the poser of 3 = 2*2*2

const firstName = 'Nikki'; 
const lastName = 'Grostefon';
console.log (firstName + " " + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x = x + 1 = 100
x --;  // x = x + 1 = 99
console.log(x);

//COMPARISON OPERATORS
console.log(ageGrostefon > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > - 2018);

//////////////////////////////////////////////////////////// BASIC PRECEDENCE 15

// MDN "operator precedence" - list all of them
const now = 2037;
const ageGrostefon = now - 1980;
const ageSarah = now - 2018;

console.log(now - 1991 > - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 -5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageGrostefon + ageSarah) / 2
console.log(ageGrostefon, ageSarah, averageAge);

//////////////////////////////////////////////////////////// STRINGS & TEMPLATE LITERALS 17

const firstName = 'Nikki';
const job = 'programmer';
const birthYear = 1980;
const year = 2037;
const nikki = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(nikki);

const nikkiNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(nikkiNew);

console.log(`Just a regular string...`)

console.log('string with \n\
multiple \n\
lines');

console.log(`Stirng
multiple
lines`);

//////////////////////////////////////////////////////////// TAKING DECISIONS: IF / ELSE STATEMENTS 18

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license ✔');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//////////////////////////////////////////////////////////// TYPE CONVERSION & COERCION 20

// type converstion
const inputYear = '1980';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Nikki'));
console.log(typeof NaN);

console.log (String(23), 23);

// type coercion 
console.log("I am " + 41 + " years old.") // automatic 
console.log("I am " + '41' + " years old.") // manual

console.log("23" - "10" - 3); //string converted to numbers
console.log("23" + "10" + 3); //numbers converted to strings
console.log('23' * '2'); //string converted to numbers - only way * & / can work
console.log('23' / '2'); //^^
console.log('23' > '18');

let n = '1' + 1; // 11
n = n - 1; // 11-1 = 10
console.log(n);

//////////////////////////////////////////////////////////// TRUTHY & FALSY VALUES 21

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //---falsy
console.log(Boolean(undefined)); //---falsy
console.log(Boolean(' ')); //---falsy
console.log(Boolean('Nikki')); //---truthy
console.log(Boolean({})); //---truthy

const money = 100;
if(money) {
    console.log("Don't spend it all!");
}
else {
    console.log("You should get a job");
}

let height = NaN;
if(height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED!");
}

//////////////////////////////////////////////////////////// EQUALITY OPERATORS ==VS.== 22

// === is a STRICT EQUALITY OPERATOR -- **DOES NOT PREFORM COERCION**
// == is a lOOSE EQUALITY OPERATOR -- **PREFORMS COERCION** -> use as less as possible
// = is a ASSIGNMENT OPERATOR


// const age = '18';

// if (age === 18) console.log('You just became an adult :D (strick)');

// if (age == 18) console.log('You just became an adult :D (loose)');


const age = 18;

if (age === 18) console.log('You just became an adult :D (strick)');

if (age == 18) console.log('You just became an adult :D (loose)');


const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 222) {
    console.log('Cool! 222 is an amazing number')
} else if (favorite === 7) {
    console.log('Cool! 7 is also a cool number')
} else if (favorite === 41) {
    console.log('Cool! 41 is also a cool number')
} else {
    console.log('Number is not a 222, 7, or 41!')
}

//**DIFFERENT OPERATOR**
if (favorite !== 222) console.log('Why not 222?')

//////////////////////////////////////////////////////////// BOOLEAN LOGIC 23

// BASIC BOOLEAN LOGIC: AND, OR, & NOT OPERATORS

//////////////////////////////////////////////////////////// lOGICAL OPERATORS 24

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive.... DON'T LET SARAH DRIVE!");
// }

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive.... DON'T LET SARAH DRIVE!");
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive.... DON'T LET SARAH DRIVE!");
}

//////////////////////////////////////////////////////////// THE SWITCH STATEMENT 26

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('plan course structure.');
        console.log('Go to coding meetup.')
        break;
    case 'tuesday':
        console.log('Prepare theory vidoes');
        break;
    case 'Wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday'){
    console.log('plan course structure.');
    console.log('Go to coding meetup.')
} else if (day === 'tuesday') {
    console.log('Prepare theory vidoes');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || 'sunday') {
    console.log('enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

//////////////////////////////////////////////////////////// STATEMENTS AND EXPRESSIONS 27

// EXPRESSIONS = PRODUCE VALUE

3 + 4 //<-- EXPRESSION
1980//<-- EXPRESSION
true && false && !false //<-- EXPRESSION

// STATMENTS = DO NOT PRODUCE VALUE ON THEIR OWN && LIKE FULL SENTENCES OF ACTIONS WE WANT TO PREFORM

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1980} years old ${me}`)

//////////////////////////////////////////////////////////// CONDITIONAL (TERNARY) OPERATOR 28

// Ternary's are like if/else statements.

const age = 41;
age >= 18 ? console.log('I like to eat grass') : console.log('I like to eat peanuts.')

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log (`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

////////////////////////////////////////////////////////////