import Card from "./components/card.js";
import ImugClass from "./components/image.js";

const bronnImg = "/img/bronn.jpg";
const daenerysImg = "/img/daenerys.jpg";
const jaimeImg = "/img/jaime.jpg";
const joffreyImg = "/img/joffrey.jpg";
const tyrionImg = "/img/tyrion.jpg";
const cardContainer = document.querySelector("ul");

const bronnCard = new Card(cardContainer, "character col", bronnImg);
const daenerysPicture = new ImugClass(daenerysImg);
const jaimeCard = new Card(cardContainer, "character col", daenerysImg);
const daenerysCard = new Card(cardContainer, "character col", tyrionImg);
const tyrionCard = new Card(cardContainer, "character col", joffreyImg);
const joffreyCard = new Card(cardContainer, "character col", jaimeImg);
