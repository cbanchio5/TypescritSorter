"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
// const numbers = new CharactersCollection('cesar');
// const sorter = new Sorter(numbers);
// sorter.sort();
// console.log(numbers.data);
// const numbersCollection = new NumbersCollection([34,76,342,64]);
// numbersCollection.sort()
// console.log(numbersCollection.data)
const charactersCollection = new CharactersCollection_1.CharactersCollection('cesarbanchio');
charactersCollection.sort();
console.log(charactersCollection.data);
