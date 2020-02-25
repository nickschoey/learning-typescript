let apples = 5;
const peaches = true;

apples = 'six';

let speed: string = 'fast';
speed = 50;

let hasName: boolean = true;

let nothingMuch: null = null;
nothingMuch = 5;

// built in objects
let now: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = i => {
  console.log(i);
};

// When to use annotations
// Functions that return the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// When we declare a variable and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}
