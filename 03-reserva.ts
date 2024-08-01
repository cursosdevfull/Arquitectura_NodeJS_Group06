class Alumno {
  private codigo: string;
  private nombre: string;

  constructor(codigo: string, nombre: string) {
    this.codigo = codigo;
    this.nombre = nombre;
  }
}

class Clase {
  private nombre: string;
  private frecuencia: string;
  private horario: string;

  constructor(nombre: string, frecuencia: string, horario: string) {
    this.nombre = nombre;
    this.frecuencia = frecuencia;
    this.horario = horario;
  }
}

class Reserva {
  private codigo: string;
  private alumno: Alumno;
  private nombreSede: string;
  private clase: Clase;

  constructor(
    codigo: string,
    alumno: Alumno,
    nombreSede: string,
    clase: Clase
  ) {
    this.codigo = codigo;
    this.alumno = alumno;
    this.nombreSede = nombreSede;
    this.clase = clase;
  }
}
