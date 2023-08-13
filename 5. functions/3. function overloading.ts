// 
// Function overloading is a feature in TypeScript (and some other programming languages) that allows you to define multiple function signatures for a single function name. This enables you to provide different implementations of the function based on the number or types of arguments passed to it. Function overloading is primarily used to provide more intuitive type checking and documentation for functions with various parameter combinations.



type ConversionType = "length" | "temperature";
function convert(value: number, fromUnit: string, toUnit: string, type: ConversionType): number {
    if (type === "length") {
        if (fromUnit === "meters" && toUnit === "feet") {
            return value * 3.281;
        } else if (fromUnit === "feet" && toUnit === "meters") {
            return value / 3.281;
        }
    } else if (type === "temperature") {
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            return (value * 9/5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            return (value - 32) * 5/9;
        }
    }

    throw new Error("Unsupported conversion");
}

const lengthConversion = convert(5, "meters", "feet", "length");
console.log(`Length conversion: ${lengthConversion.toFixed(2)} feet`);

const tempConversion = convert(25, "celsius", "fahrenheit", "temperature");
console.log(`Temperature conversion: ${tempConversion.toFixed(2)} °F`);
