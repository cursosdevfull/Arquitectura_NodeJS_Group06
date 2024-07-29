class Tablero {
  goles: number;
  cantidadTarjetasAmarillas: number;
  cantidadTarjetasRojas: number;
  porcentajeRetencionPorEquipo: number[];
  equipos: string[];
}

const tablero = new Tablero();
tablero.goles = -3;
tablero.cantidadTarjetasAmarillas = -1;
tablero.cantidadTarjetasRojas = 25;
tablero.porcentajeRetencionPorEquipo = [200, 50];
tablero.equipos = ["Equipo1", "Equipo2", "Equipo3", "Equipo4"];
