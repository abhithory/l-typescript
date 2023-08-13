// TypeScript is JavaScript with syntax for types.
// TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
// - TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
// - TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.
// - TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.




// typescript is not understood by browser. so we need to convert it to js to use it in html file in browser
// run: tsc index.ts


function sum(a: number, b:number) {
    return a + b;
}

console.log(sum(2,3));
