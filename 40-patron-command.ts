interface IAppointmentPeru {
  patientName: string;
  patientLastname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
}

interface IAppointmentChile {
  patientFullname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
  centerId: number;
}

interface IAppointmentMexico {
  patientName: string;
  patientLastname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
  insuranceId: number;
  centerId: number;
}

interface IPayload<T> {
  payload: T;
}

abstract class Command<T> {
  abstract target: string;
  abstract message: IPayload<T>;

  execute() {
    console.log(
      `Target: ${this.target} - Message: ${JSON.stringify(this.message)}`
    );
  }
}

class AppointmenPeruCommand extends Command<IAppointmentPeru> {
  target: string = "AppointmentPeru";
  message: { payload: IAppointmentPeru };

  constructor(appointment: IAppointmentPeru) {
    super();
    this.message = { payload: appointment };
  }
}

class AppointmenChileCommand extends Command<IAppointmentChile> {
  target: string = "AppointmenChile";
  message: { payload: IAppointmentChile };

  constructor(appointment: IAppointmentChile) {
    super();
    this.message = { payload: appointment };
  }
}

class AppointmenMexicoCommand extends Command<IAppointmentMexico> {
  target: string = "AppointmentMexico";
  message: { payload: IAppointmentMexico };

  constructor(appointment: IAppointmentMexico) {
    super();
    this.message = { payload: appointment };
  }
}

class AppointmenColombiaCommand extends Command<IAppointmentColombia> {
  target: string = "AppointmentColombia";
  message: { payload: IAppointmentColombia };

  constructor(appointment: IAppointmentColombia) {
    super();
    this.message = { payload: appointment };
  }
}

const target: Array<
  Command<IAppointmentPeru | IAppointmentChile | IAppointmentMexico>
> = [
  new AppointmenPeruCommand({
    patientName: "Katia",
    patientLastname: "Filomeno",
    date: new Date(),
    medicId: 100,
    specialtyId: 100,
  }),

  new AppointmenChileCommand({
    patientFullname: "Katia",
    date: new Date(),
    medicId: 100,
    specialtyId: 100,
    centerId: 4,
  }),

  new AppointmenMexicoCommand({
    patientName: "Katia",
    patientLastname: "Filomeno",
    date: new Date(),
    medicId: 100,
    specialtyId: 100,
    centerId: 4,
    insuranceId: 3,
  }),
];

target.forEach(
  (item: Command<IAppointmentPeru | IAppointmentChile | IAppointmentMexico>) =>
    item.execute()
);
