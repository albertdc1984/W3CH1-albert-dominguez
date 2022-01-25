import Card from "./components/card.js";
import Rey from "./rey.js";
import Luchador from "./luchador.js";
import Escudero from "./escudero.js";
import Asesor from "./asesor.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, "img/joffrey.jpg", 2);
const jaime = new Luchador(
  "Jaime",
  "Lannister",
  45,
  "img/jaime.jpg",
  "Espada",
  7
);
const daenerys = new Luchador(
  "Daenerys",
  "Targaryen",
  30,
  "img/daenerys.jpg",
  "Dragones",
  10
);
const tyrion = new Asesor(
  "Tyrion",
  "Lannister",
  40,
  "img/tyrion.jpg",
  daenerys
);
const bronn = new Escudero(
  "Bronn",
  "AguasNegras",
  54,
  "img/bronn.jpg",
  0,
  jaime
);
const bronnImg = bronn.foto;
const cardContainer = document.querySelector("ul");

const bronnCard = new Card(cardContainer, "character col", bronnImg);
const jaimeCard = new Card(cardContainer, "character col", bronn);
const daenerysCard = new Card(cardContainer, "character col", bronn);
const tyrionCard = new Card(cardContainer, "character col", bronn);
const joffreyCard = new Card(cardContainer, "character col", bronn);
