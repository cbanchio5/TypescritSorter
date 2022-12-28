import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumberCollection"
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbers = new CharactersCollection('cesar');
// const sorter = new Sorter(numbers);
// sorter.sort();

// console.log(numbers.data);

// const numbersCollection = new NumbersCollection([34,76,342,64]);
// numbersCollection.sort()
// console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('cesarbanchio')
charactersCollection.sort();
console.log(charactersCollection.data);
