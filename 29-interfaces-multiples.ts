interface INotificationEmail {
  sentEmail(message: string, sender: string, receiver: string): void;
}

interface INotificationWhatsapp {
  sentMessageWhatsApp(message: string, sender: string, receiver: string): void;
}

class NotificationPlanner implements INotificationEmail {
  sentEmail(message: string, sender: string, receiver: string): void {
    console.log(`message: ${message} send from ${sender} to ${receiver}`);
  }
}

class NotificationCustomer
  implements INotificationEmail, INotificationWhatsapp
{
  sentMessageWhatsApp(message: string, sender: string, receiver: string): void {
    console.log("Sending by WhatsApp");
  }
  sentEmail(message: string, sender: string, receiver: string): void {
    console.log("Sending by Whatsapp");
  }
}
