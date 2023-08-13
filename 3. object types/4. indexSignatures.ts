type AIROPLANE = {
    name: string;
    model: string;
    seats: {
        [index: string]: string;
    }
}

const airoplaneData: AIROPLANE = {
    name: "our airoplane",
    model: "23dfs",
    seats: {
        "A01":"Abhishek",
        "A02":"Abhishek",
        "A03":"Abhishek"
    }
}