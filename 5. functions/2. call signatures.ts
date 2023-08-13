type greetingFunctionType = (greeting:string) => string;

type Person = {
    name: string;
    age: number;
    greeting: greetingFunctionType;
}

const personNew: Person = {
    name: "abhishek",
    age: 21,
    greeting: (greeting: string) => {
        return `${greeting} ${personNew.name}`
    }
}