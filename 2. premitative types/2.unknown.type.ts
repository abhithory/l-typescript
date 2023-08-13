function multiBy2(num: unknown){
    if (typeof num === "number") {
        return num *2;
    }

    return "Please provide number";
}