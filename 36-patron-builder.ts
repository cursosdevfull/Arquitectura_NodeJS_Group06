interface MedicProperties {
  name: string;
  lastname: string;
  enrollCode: string;
  phoneNumber: string;
  email: string;
  age: number;
  specialty: string;
  subSpecialty: string;
  gender: string;
}

class MedicBuilder {
  private name: string;
  private lastname: string;
  private enrollCode: string;
  private phoneNumber: string;
  private email: string;
  private age: number;
  private specialty: string;
  private subSpecialty: string;
  private gender: string;

  addName(value: string) {
    this.name = value;
    return this;
  }

  addLastname(value: string) {
    this.lastname = value;
    return this;
  }

  addEnrollCode(value: string) {
    this.enrollCode = value;
    return this;
  }

  addPhoneNumber(value: string) {
    this.phoneNumber = value;
    return this;
  }

  addEmail(value: string) {
    this.email = value;
    return this;
  }

  addAge(value: number) {
    this.age = value;
    return this;
  }

  addSpecialty(value: string) {
    this.specialty = value;
    return this;
  }

  addSubSpecialty(value: string) {
    this.subSpecialty = value;
    return this;
  }

  addGender(value: string) {
    this.gender = value;
    return this;
  }

  build() {
    return new Medic(
      this.name,
      this.lastname,
      this.enrollCode,
      this.phoneNumber,
      this.email,
      this.age,
      this.specialty,
      this.subSpecialty,
      this.gender
    );
  }
}

class Medic {
  private name: string;
  private lastname: string;
  private enrollCode: string;
  private phoneNumber: string;
  private email: string;
  private age: number;
  private specialty: string;
  private subSpecialty: string;
  private gender: string;

  constructor(
    name: string,
    lastname: string,
    enrollCode: string,
    phoneNumber: string,
    email: string,
    age: number,
    specialty: string,
    subSpecialty: string,
    gender: string
  ) {
    this.name = name;
    this.lastname = lastname;
    this.enrollCode = enrollCode;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.age = age;
    this.specialty = specialty;
    this.subSpecialty = subSpecialty;
    this.gender = gender;
  }
}

//const medic = new Medic("Diego", "Mena", "1234", "999-999-123", "diego.mena@email.com", 34, "Cardiología", "Cardiología geriátrica", "male")

const medic: Medic = new MedicBuilder()
  .addName("Carlos")
  .addLastname("Zapata")
  .addEnrollCode("12345")
  .addPhoneNumber("999-133-555")
  .addEmail("carlos.zapata@email.com")
  .addAge(30)
  .addSpecialty("Cardiología")
  .addSubSpecialty("Cardiología geriátrica")
  .addGender("Male")
  .build();

console.log("medic", medic);
