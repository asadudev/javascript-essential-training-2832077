/**
 * Solution: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Books from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());



const js_1 = new Books(
  "A Smarter Way to Learn JavaScript: ",
  5,
  "1st Edition",
  "CreateSpace Independent Publishing Platform",
  2007,
  256,
  256,
  "finished"
);

console.log("Book one:", js_1)


const js_2 = new Books(
  " Learn JavaScript VISUALLY:",
  4.5,
  "1st Edition",
  "Nai Inc.",
  2005,
  197,
  197,
  "finished"
);

console.log("Book two:", js_2)



const js_3 = new Books(
  "You Don’t Know JS",
  4.0,
  "1st Edition",
  "O’Reilly Media",
  1997,
  109,
  135,
  "Reading"
);

console.log("Book three:", js_3)



const js_4 = new Books(
  "Beginning JavaScript",
  4.7,
  "5th Edition",
  "Wrox",
  1999,
  35,
  355,
  "Reading"
);

console.log("Book four:", js_4)


const js_5 = new Books(
  "The Comprehensive Guide to Learning Professional JavaScript Programming",
  4.9,
  "1st Edition",
  "Rheinwerk Computing",
  2015,
  213,
  213,
  "finished"
);

console.log("Book five:", js_5)
