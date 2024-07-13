interface UserProps {
  name?: string;
  lastname?: string;
  age?: number;
  email?: string;
  gender?: string;
}

class User {
  private readonly userId: number;
  private name?: string;
  private lastname: string | undefined;
  private age?: number;
  private email?: string;
  private gender?: string;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserProps) {
    this.userId = new Date().getTime();
    this.createdAt = new Date();
    this.name = props.name;
    this.lastname = props.lastname;
    this.age = props.age;
    this.gender = props.gender;
    this.email = props.email;
  }
}

const props: UserProps = {
  name: "Arturo",
  lastname: "Perales",
  age: 20,
  email: "arturo.perales@email.com",
  gender: "M",
};

const user = new User(props);
console.log(user);
