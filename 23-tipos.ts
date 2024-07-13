type GENDER = "MALE" | "FEMALE";
type DATE_OPTIONAL = Date | undefined;

interface UserPropsRequired {
  name: string;
  lastname?: string;
}

interface UserPropsOptionals {
  age: number;
  email: string;
  gender: GENDER;
}

class User {
  private readonly userId: number;
  private name: string | undefined;
  private lastname: string | undefined;
  private age: number | undefined;
  private email: string | undefined;
  private gender: GENDER | null;
  private readonly createdAt: Date;
  private updatedAt: DATE_OPTIONAL;
  private deletedAt: DATE_OPTIONAL;

  constructor(
    props: Required<UserPropsRequired> & Partial<UserPropsOptionals>
  ) {
    this.userId = new Date().getTime();
    this.createdAt = new Date();

    if (props.name) this.name = props.name;
    this.lastname = props.lastname;
    this.age = props.age;
    this.gender = props.gender ?? null;
    this.email = props.email;
  }
}

const props: Required<UserPropsRequired> & Partial<UserPropsOptionals> = {
  name: "Arturo",
  lastname: "Perales",
  gender: "MALE",
};

const user = new User(props);
console.log(user);
