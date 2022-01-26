import Card from "./modules/Card.js";
import Images from "./modules/Image.js";

const cardParent = document.querySelector(".charactercol");

const imageSourceDa = "/web/img/daenerys.jpg";
const imageClassDa = ".card_danaerys";
const imageSourceBr = "/web/img/bronn.jpg";
const imageClassBr = ".card_bronn";
const imageSourceJa = "/web/img/jaime.jpg";
const imageClassJa = ".card_jaime";
const imageSourceJo = "/web/img/joffrey.jpg";
const imageClassJo = ".card_joffrey";
const imageSourceTy = "/web/img/tyrion.jpg";
const imageClassTy = ".card_tyrion";

const danaerysCard = new Card(cardParent, imageClassDa, imageSourceDa);

const tyrionCard = new Card(cardParent, imageClassTy, imageSourceTy);
const joffreyCard = new Card(cardParent, imageClassJo, imageSourceJo);
const bronnCard = new Card(cardParent, imageClassBr, imageSourceBr);
const jaimeCard = new Card(cardParent, imageClassJa, imageSourceJa);
