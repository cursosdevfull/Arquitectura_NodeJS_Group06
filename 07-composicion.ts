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

class UserSalary {
  salary: number;
  userInformationPersonal: UserInformationPersonal;

  constructor(
    userId: number,
    name: string,
    lastname: string,
    gender: string,
    age: number,
    salary: number
  ) {
    this.salary = salary;
    const userInformationPersonal = new UserInformationPersonal(
      userId,
      name,
      lastname,
      gender,
      age
    );
    this.userInformationPersonal = userInformationPersonal;
  }
}
