type DOG = {
    name: string;
    barks: boolean;
    wags: boolean;
}

type CAT = {
    name: string;
    purrs: boolean;
}

type CATDOG = CAT | DOG; //A union type is a type that represents a value that can be of one of several types. You create a union type by using the | operator between the types. Union types are useful when a value can take on different types at different times.


const onlyCat: CATDOG = {
    name: "ourcat",
    purrs:true,
    wags:false,
}


let value: string | number;

value = "afa";
value = 323;