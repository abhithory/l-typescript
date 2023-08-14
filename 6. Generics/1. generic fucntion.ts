// type Filter = {
//     // (arr: string[], predicate: (value: string) => boolean): string[];
//     // (arr: number[],predicate:  (value: number) => boolean): number[];
//     // (arr: boolean[], predicate: (value: boolean) => boolean): boolean[];
//     <T>(arr: T[], predicate: (value: T) => boolean): T[];
// }

type Filter = <T>(arr: T[], predicate: (value: T) => boolean) => T[];



const filter: Filter = (arr, predicate) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (predicate(item)) {
            result.push(item);
        }   
    }
    return result;
}


const numArray = [1,2,34,5,6,7,77,88];
const graterThan5 = (value: number) => {
    return value > 5
}

filter(numArray,graterThan5);


const strigArray = ["a","b","c","d","e","f"];
const ifEqualToC = (value: string) => {
    return value === "c";
}
filter(strigArray,ifEqualToC);


