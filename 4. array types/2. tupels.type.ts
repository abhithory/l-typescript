// A tuple is a specific type of array in TypeScript that allows you to express an array where the types of elements are known and fixed, but they don't all have to be the same type. Tuples provide a way to represent structured data with a precise order and a predefined set of element types.


type PERSON = [string, number, boolean, ...string[]];
const person:PERSON = ["Alice", 30, true];
const person2:PERSON = ["Alice", 30, true,"friend1","friend2"];