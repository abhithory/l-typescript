// An intersection type is a type that represents a value that must fulfill the requirements of all the types being intersected. You create an intersection type by using the & operator between the types. Intersection types are useful when you want to combine multiple types into a single type with all their properties.

type HybridAnimal = DOG & CAT;

let hybridAnimal: HybridAnimal = {
    name:"maxx",
    purrs:true,
    barks:true,
    wags:false
}