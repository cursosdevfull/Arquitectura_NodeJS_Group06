class Tablero {
  private goles: number;
  private cantidadTarjetasAmarillas: number;
  private cantidadTarjetasRojas: number;
  private porcentajeRetencionPorEquipo: number[];
  private equipos: string[];

  constructor(
    goles: number,
    cantidadTarjetasAmarillas: number,
    cantidadTarjetasRojas: number,
    porcentajeRetencionPorEquipo: number[],
    equipos: string[]
  ) {
    if (goles < 0) throw new Error("Goles no pueden ser menores a cero");
    if (cantidadTarjetasAmarillas < 0)
      throw new Error(
        "Cantidad de tarjetas amarillas no pueden ser menores a cero"
      );
    if (cantidadTarjetasRojas > 22)
      throw new Error("No pueden haber más tarjetas rojas que jugadores");
    if (equipos.length < 2)
      throw new Error("No pueden hber menos de 2 equipos");
    if (porcentajeRetencionPorEquipo.length !== 2)
      throw new Error("La longitud debe ser 2");

    const sumaPorcentajeRetencion = porcentajeRetencionPorEquipo.reduce(
      (accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator;
      },
      0
    );

    if (sumaPorcentajeRetencion <= 0)
      throw new Error(
        "La suma de las retenciones no pueden ser menores o iguales a cero"
      );
    if (sumaPorcentajeRetencion > 100)
      throw new Error(
        "La suma de los porcentajes de retención no debe ser mayor a 100"
      );

    this.goles = goles;
    this.cantidadTarjetasAmarillas = cantidadTarjetasAmarillas;
    this.cantidadTarjetasRojas = cantidadTarjetasRojas;
    this.porcentajeRetencionPorEquipo = porcentajeRetencionPorEquipo;
  }
}
