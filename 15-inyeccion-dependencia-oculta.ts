interface IEmail {
  sent(
    sender: string,
    destination: string,
    html: boolean,
    ssl: boolean
  ): string;
}

class EmailGoDaddy implements IEmail {
  sender!: string;
  destination!: string;
  html!: boolean;
  ssl!: boolean;

  set sSender(value: string) {
    this.sender = value;
  }

  set sDestination(value: string) {
    this.destination = value;
  }

  set sHtml(value: boolean) {
    this.html = value;
  }

  set sSsl(value: boolean) {
    this.ssl = value;
  }

  execute() {
    return "message send by godaddy";
  }

  sent(
    sender: string,
    destination: string,
    html: boolean,
    ssl: boolean
  ): string {
    this.sSender = sender;
    this.sDestination = destination;
    this.sHtml = html;
    this.sSsl = ssl;
    return this.execute();
  }
}

class Office365 implements IEmail {
  config(sender: string, destination: string, html: boolean, ssl: boolean) {
    console.log("configuration office365");
  }

  sentMessage() {
    return "message send by office365";
  }

  sent(
    sender: string,
    destination: string,
    html: boolean,
    ssl: boolean
  ): string {
    this.config(sender, destination, html, ssl);
    return this.sentMessage();
  }
}

class GMail implements IEmail {
  sentEmail(
    sender: string,
    destination: string,
    options: { html: boolean; ssl: boolean }
  ) {
    return "email send by gmail";
  }

  sent(
    sender: string,
    destination: string,
    html: boolean,
    ssl: boolean
  ): string {
    return this.sentEmail(sender, destination, { html, ssl });
  }
}

class Communication {
  method: IEmail;

  constructor() {
    this.method = new EmailGoDaddy();
  }

  sent(sender: string, destination: string, html: boolean, ssl: boolean) {
    return this.method.sent(sender, destination, html, ssl);
  }
}

const comm = new Communication();
console.log(comm.sent("CursosDev", "pedro@email.com", true, true));
