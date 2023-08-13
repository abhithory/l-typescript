

const numers: readonly number[] = [1,2,3];

type PERSON2 = readonly [string,...number[]];

let readOnlyPerson: PERSON2 = ["abhi",1,2,34,4];

// readOnlyPerson[0] = "dsafdsf";