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

  constructor(estado: TEstado, monto: number, concepto: string) {
    this.estado = estado;
    this.monto = monto;
    this.concepto = concepto;
  }
}

class Alumno {
  nombre: string;
  codigo: string;
  pagos: Pago[];
  metodosPago: EMetodoPago[];

  constructor(
    nombre: string,
    codigo: string,
    pagos: Pago[],
    metodosPago: EMetodoPago[]
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.pagos = pagos;
    this.metodosPago = metodosPago;
  }
}
