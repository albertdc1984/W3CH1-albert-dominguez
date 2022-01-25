class Personaje {
  nombre;

  familia;

  edad;

  vivo = true;

  foto;

  static serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, fotoPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.foto = fotoPersonaje;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}
export default Personaje;
