class UserSalary {
  private readonly userId: number;
  private salary: number;

  constructor(userId: number, salary: number) {
    this.userId = userId;
    this.salary = salary;
  }

  get valueSalary() {
    return this.salary;
  }

  set valueSalary(salary: number) {
    this.salary = salary;
  }
}

const userId = new Date().getTime();
const userSalary = new UserSalary(userId, 100);
console.log(userSalary.valueSalary);
userSalary.valueSalary = 200;
console.log(userSalary.valueSalary);
