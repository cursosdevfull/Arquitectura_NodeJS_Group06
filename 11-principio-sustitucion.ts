class NotificationV1 {
  sendEmail(
    recipientName: string,
    recipientEmail: string,
    subject: string,
    body: string,
    senderEmail: string
  ) {
    return "email send";
  }
}

class NotificationV2 extends NotificationV1 {
  sendSMS(phoneNumber: string, message: string) {
    return "sms send";
  }
}

class NotificationV3 extends NotificationV2 {
  sendMessageWhatsapp(phoneNumber: string, message: string) {
    return "message send";
  }
}

//const notification = new NotificationV1()
//const notification = new NotificationV2()
const notification = new NotificationV3();
console.log(
  notification.sendEmail(
    "Juan Pérez",
    "juan.perez@email.com",
    "Bienvenido",
    "Bienvenido a esta isla caribeña",
    "info@caribeenjoy.com"
  )
);
