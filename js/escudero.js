import Personaje from "./personaje.js";
import Luchador from "./luchador.js";

class Escudero extends Personaje {
  sirveA;

  pelotismo;

  constructor(
    nombreEscudero,
    familiaEscudero,
    edadEscudero,
    fotoEscudero,
    valorPelotismo,
    personajeSirve
  ) {
    super(nombreEscudero, familiaEscudero, edadEscudero, fotoEscudero);
    this.pelotismo = this.filtrarPelotismo(valorPelotismo);
    if (personajeSirve instanceof Luchador) {
      this.sirveA = personajeSirve;
    }
  }

  filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    }
    if (gradoPelotismo > 10) {
      return 10;
    }
    return gradoPelotismo;
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}

export default Escudero;
