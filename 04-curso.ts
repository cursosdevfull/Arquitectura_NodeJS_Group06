class Metas {
  titulo: string;
}

class Requisitos {
  titulo: string;
}

class Syllabus {
  titulo: string;
}

class Curso {
  titulo: string;
  resumen: string;
  metas: Metas[];
  requisitos: Requisitos[];
  syllabus: Syllabus[];

  constructor(
    titulo: string,
    resumen: string,
    metas: Metas[],
    requisitios: Requisitos[],
    syllabus: Syllabus[]
  ) {
    this.titulo = titulo;
    this.resumen = resumen;
    this.metas = metas;
    this.requisitos = requisitios;
    this.syllabus = syllabus;
  }
}
