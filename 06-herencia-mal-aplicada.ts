class UserInformationPersonal {
  userId: number;
  name: string;
  lastname: string;
  gender: string;
  age: number;

  constructor(
    userId: number,
    name: string,
    lastname: string,
    gender: string,
    age: number
  ) {
    this.userId = userId;
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
    this.age = age;
  }
}

/*class UserSalary {
    userId: number
    salary: number

    constructor(userId: number, salary: number) {
        this.userId = userId
        this.salary = salary
    }
}*/

class UserSalary extends UserInformationPersonal {
  salary: number;

  constructor(
    userId: number,
    name: string,
    lastname: string,
    gender: string,
    age: number,
    salary: number
  ) {
    super(userId, name, lastname, gender, age);
    this.salary = salary;
  }
}
