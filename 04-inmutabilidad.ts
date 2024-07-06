class User {
  readonly id: string;
  name: string;
  lastname: string;
  email: string;
  readonly password: string;
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;

  constructor(name: string, lastname: string, email: string, password: string) {
    if (password.length < 5) throw "Password must have 5 characters at least";

    this.createdAt = new Date();

    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.id = "abc-123";

    /*this.id = "abc-123"
        this.name = "Carlos"
        this.lastname = "Malaquias"
        this.email = "carlos@email.com"
        this.password = "12345"*/
  }

  getPassword() {
    return this.password;
  }
}

const user = new User("Aldo", "Rodríguez", "aldo@email.com", "12345");
// user.password = "123"
//user.id = "def-456"
console.log(user);
