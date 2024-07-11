// Culqi
// Niubiz
// PayU

class Payment {
  processPayment(amount: number) {
    this.sentNotification();
  }

  sentNotification() {}
}

class PaymentCulqi extends Payment {
  override processPayment(amount: number) {
    return "payment with Culqi";
  }
}

class PaymentNiubiz extends Payment {
  override processPayment(amount: number) {
    return "payment with Niubiz";
  }
}

class PaymentPayU extends Payment {
  override processPayment(amount: number) {
    return "payment with PayU";
  }
}

const payment = (paymentMethod: Payment, amount: number) => {
  return paymentMethod.processPayment(amount);
};

const paymentMethod = new PaymentPayU();
console.log(payment(paymentMethod, 100));
