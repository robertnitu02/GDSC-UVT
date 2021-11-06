function hello(string: String) {
    console.log("Hello " + string + "!");
}

hello("World");
hello("Roho");
hello("Mentosan");

// Interfaces
interface Stark {
    name: string;
}

function printName(stark: Stark) {
    console.log(stark.name);
}

printName({name: "Ana"});
// printName({prenume: "Cameliu"});