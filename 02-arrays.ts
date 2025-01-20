// cara 1: Tipe[]
let number: number[] = [1, 2, 3, 4, 5,];
let names: string[] = ["Paul", "Andrew", "Gerado", "Pasaribu"]

//cara 2: Array[]
let scores: Array<number> = [1, 2, 3, 4, 5,];
let fruits: Array<string> = ["Aplle", "Banana", "Grape"];

//Array degan multiple type (union type)
let mixed: (string | number)[] = [1, "two", 3, "four"];

//Array methods 
number.push(6); // Menambahkan element
names.pop(); // Menghapus element terakhir

// Iterasi array 
number.forEach((num) =>{
    console.log("Number: ", num)
});

//array mapping
const doubledNumbers = number.map((num) => num * 2);
console.log("Doubled Numbers: ", doubledNumbers);

export{};