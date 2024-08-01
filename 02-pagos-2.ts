type TMetodoPago = "PAGO EFECTIVO" | "TRANSFERENCIA BANCARIA";

enum EMetodoPago {
  PAGO_EFECTIVO = "PAGO EFECTIVO",
  TRANSFERENCIA = "TRANSFERENCIA_BANCARIA",
}

type TEstado = "PAGADO" | "PENDIENTE";

class Pago {
  estado: TEstado;
  monto: number;
  concepto: string;
  codigoAlumno: string;

  constructor(
    estado: TEstado,
    monto: number,
    concepto: string,
    codigoAlumno: string
  ) {
    this.estado = estado;
    this.monto = monto;
    this.concepto = concepto;
    this.codigoAlumno = codigoAlumno;
  }
}

class Alumno {
  nombre: string;
  codigo: string;
  metodosPago: EMetodoPago[];

  constructor(nombre: string, codigo: string, metodosPago: EMetodoPago[]) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.metodosPago = metodosPago;
  }
}
