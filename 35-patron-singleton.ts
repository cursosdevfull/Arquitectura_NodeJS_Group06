class Database {
  private static instance: Database;
  private currentDate: Date;

  private constructor() {
    console.log("date", new Date());
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }

    return this.instance;
  }

  setDate() {
    this.currentDate = new Date();
  }

  getDate() {
    return this.currentDate;
  }
}

Database.getInstance().setDate();
console.log(Database.getInstance().getDate());
console.log(Database.getInstance().getDate());
console.log(Database.getInstance().getDate());
console.log(Database.getInstance().getDate());
console.log(Database.getInstance().getDate());
