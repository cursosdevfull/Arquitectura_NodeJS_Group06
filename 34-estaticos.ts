type TProtocol = "http" | "https";

class Database {
  static protocol: TProtocol = "https";

  static getConnectionString(
    host: string,
    username: string,
    password: string,
    schema: string
  ) {
    return `${this.protocol}://${host}/${username}:${password}/${schema}`;
  }

  getProtocol() {
    return Database.protocol;
  }
}

//const database = new Database()
const connectionString = Database.getConnectionString(
  "localhost",
  "user123",
  "abcde",
  "test"
);
console.log(connectionString);
console.log("protocol", new Database().getProtocol());
