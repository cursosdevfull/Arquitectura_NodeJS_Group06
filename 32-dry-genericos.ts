type TGender = "MALE" | "FEMALE";

interface IUser {
  name: string;
  lastname: string;
  age: number;
  gender: TGender;
  isActive: boolean;
}

interface IMedic {
  name: string;
  lastname: string;
  age: number;
  specialtyId: number;
  active: boolean;
}

const user: IUser = {
  name: "Luis",
  lastname: "Campos",
  age: 20,
  gender: "MALE",
  isActive: true,
};
const medic: IMedic = {
  name: "Carla",
  lastname: "Sotelo",
  age: 35,
  specialtyId: 50,
  active: true,
};

// propertyName: "name" | "lastname" | "age" | "gender" | "isActive"  // keyof IUser
// propertyName: "name" | "lastname" | "age" | "specialtyId" | "active" // keyof IMedic
// T[keyof T] : string | string | number | TGender | boolean

// keyof "name" | "lastname" | "age" | "gender" | "isActive"
//       string | string | number | TGender | boolean

// extends keyof
/*
    name, string
    lastname, string
    age: number
    gender: TGender
    isActive: boolean

*/

function updateEntity<T, K extends keyof T>(
  entity: T,
  propertyName: K,
  value: T[K]
) {
  entity[propertyName] = value;
}

updateEntity(user, "name", "Alberto");
updateEntity(medic, "name", "Jimena");
updateEntity(user, "age", 45);

console.log("user", user);
console.log("medic", medic);

/*function UpdateUser(props: Partial<IUser>) {
    Object.assign(user, props)
}

function UpdateMedic(props: Partial<IMedic>) {
    Object.assign(medic, props)
}*/

/*function UpdateUser(name: string) {
    user.name = name
}

function UpdateMedic(lastname: string) {
    medic.lastname = lastname
}*/
