// null is a value that indicates the intentional absence of any object value or reference.
// undefined is a value that indicates a variable or property has been declared but hasn't been assigned a value yet.


// const button: HTMLElement = document.getElementById("aa")!;
const button: HTMLElement | null = document.getElementById("aa");

if (button !== null) {
    // button.onclick = 
}