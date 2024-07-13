interface UserPropsRequired {
  name: string;
  lastname: string;
}

interface UserPropsOptionals {
  age?: number;
  email?: string;
  gender?: string;
}

class User {
  private readonly userId: number;
  private name: string | undefined;
  private lastname: string | undefined;
  private age: number | undefined;
  private email: string | undefined;
  private gender: string | undefined;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserPropsRequired & UserPropsOptionals) {
    this.userId = new Date().getTime();
    this.createdAt = new Date();

    if (props.name) this.name = props.name;
    this.lastname = props.lastname;
    this.age = props.age;
    this.gender = props.gender;
    this.email = props.email;
  }
}

const props: UserPropsRequired & UserPropsOptionals = {
  name: "Arturo",
  lastname: "Perales",
  gender: "M",
};

const user = new User(props);
console.log(user);
