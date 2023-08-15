// Getters (get):
// A getter is a method that is used to retrieve the value of a property. It is defined using the get keyword followed by the property name. When you access the property, the getter method is automatically invoked.

// Setters (set):
// A setter is a method that is used to set the value of a property. It is defined using the set keyword followed by the property name. When you assign a value to the property, the setter method is automatically invoked.


class Temperature {

    constructor(private _celsius: number) {
    }

    public get celsius(): number {
        return this._celsius;
    }

    public set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature is too low.");
        }
        this._celsius = value;
    }
}

const temp = new Temperature(25);
console.log(temp.celsius); // Calls the 'celsius' getter method
temp.celsius = 30; // Calls the 'celsius' setter method
console.log(temp.celsius); // Calls the 'celsius' getter method again