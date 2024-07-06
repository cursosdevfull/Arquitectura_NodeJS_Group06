class User {
  name: string;
  lastname: string;
  email: string;
  private password: string;

  constructor() {
    this.name = "Carlos";
    this.lastname = "Malaquias";
    this.email = "carlos@email.com";
    this.password = "12345";
  }

  getPassword() {
    return this.password;
  }
}

const user = new User();
//user.password = "54321"
//console.log(user.password)
console.log(user.getPassword());
