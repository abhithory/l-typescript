// 
// In object-oriented programming, a class is a blueprint for creating objects (instances) that share common properties and behaviors. A class defines the structure and behavior of its objects, serving as a template or prototype that encapsulates data and methods.

class PersonClass{
    name:string;
    email:string;

    constructor(name:string,email:string){
        this.name = name;
        this.email = email;
    }

    greet(){
        return `Hello, i am ${this.name}`;
    }
}

const person1 = new PersonClass("abhishek","abhi@gamil.com");
const person22 = new PersonClass("abhishek2","abhi2@gamil.com");


// inheritance

class Admin extends PersonClass{
    isAdmin: boolean = true;
    group: string;

    constructor(name:string,email:string, group: string){
        super(name,email);
        this.group = group;
    }
}