enum Role {
    admin, // 0
    developer, //1
    author //2
}

enum Role2 {
    admin = "admin", 
    developer = "dev", 
    author="author" 
}

console.log(Role.admin);
console.log(Role.author);

console.log(Role2.admin);
console.log(Role2.author);
