// - Public (public):
// Members declared as public are accessible from anywhere, both within and outside the class.
// This is the default access modifier if no access modifier is specified.


// - Private (private):
// Members declared as private are only accessible within the class where they are defined. They cannot be accessed from outside the class, including subclasses.


// - Protected (protected):
// Members declared as protected are accessible within the class and its subclasses (derived classes). They cannot be accessed from outside the class hierarchy.






// short hand syntax


class PersonClass2{

    constructor(public name:string,protected email:string, private age:number){}

    greet(){
        return `Hello, i am ${this.name}`;
    }
}