let username: string = "sergio.hidalgo";
username = "carmen.zavala";
username = "carolina.avalos";

const password = "supersecreto";

const users = ["user01", "user02", "user03"];
users.push("user04");

//users.push(10)

let listName: Array<string> = ["José", "Augusto", "Claudia"];
let listUsers: string[] = ["Javier", "Luisa"];

let listStudents: Array<{
  name: string;
  age: number;
  addresses: Array<string>;
}> = [
  { name: "Carla", age: 34, addresses: ["av. del sol 123"] },
  { name: "Carlos", age: 20, addresses: ["calle los girasoles 223"] },
];

let dataToProcess: Array<Array<string>> = [
  ["ProcessA01", "ProcessA02", "ProcessA03"],
  ["ProcessB01", "ProcessB02"],
];

let dataUserToExport: Array<Array<{ name: string; age: number }>> = [
  [
    { name: "Mario", age: 34 },
    { name: "Andrea", age: 23 },
  ],
  [{ name: "Filomena", age: 45 }],
];
