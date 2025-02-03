//object type annotation
let user: {name: string; age: number; email: string } = {
    name: "john",
    age: 30,
    email: "jogn@example.com",
};

//interface untuk object
interface Employee {
    id: number;
    name: string;
    department: string;
    readonly salary: number;
    contact? : string;
}


let employee: Employee = {
    id: 1,
    name: "Jane Doe",
    department: "IT",
    salary: 50,
    contact: "johndoes@example.com"
}

interface Company {
    name: string;
    addres: {
        street: string;
        city: string;
        country: string;
    },
    employees: Employee[];
}

let company: Company = {
    name: "Tech Corp",
    addres: {
        street: "123 Main st",
        city: "Tech City",
        country: "Techland",
    },
    employees: [employee],
}

console.log("User : ", user);
console.log("Employee : ", employee);
console.log("Company : ", company);

export {};