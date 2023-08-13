function introMe(name:string, age:number): string{
    return `Hi, I am ${name} and my age is ${age}`;
}



function introMeWithCountry(name:string, age:number, country?:string): string{
    if (country) {
        return `Hi, I am ${name} and my age is ${age} and i lives in ${country}`;
    }
    return `Hi, I am ${name} and my age is ${age}`;
}


