import Card from "./card.js";

class ImugClass extends Card {
  constructor(source) {
    const pater = document.querySelector(".card");

    super(pater, ".character__picture", "img");
    this.generateSrc(source);
  }

  generateSrc(source) {
    this.element.src = source;
  }
}

export default ImugClass;
