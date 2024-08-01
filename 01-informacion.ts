class Facilidad {
  private TITULO: string;

  constructor(titulo: string) {
    this.TITULO = titulo;
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

class Direccion {
  CALLE_JIRON_AVENIDA!: string;
  NUMERO!: number;
  DISTRITO!: string;
  CIUDAD!: string;
  PROVINCIA!: string;
}

class Sede {
  private nombre: string;
  private direccion: Direccion;
  private facilidades: Facilidad[];
  private clases: Clase[];

  constructor(
    nombre: string,
    direccion: Direccion,
    facilidades: Facilidad[],
    clases: Clase[]
  ) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.facilidades = facilidades;
    this.clases = clases;
  }
}
