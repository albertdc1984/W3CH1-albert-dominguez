import Card from "card.js";

class Image extends Card {
  constructor(parentElement, className, fotoSRC) {
    super(parentElement, "image", "img");

    this.element.innerHTML = `<img src=${fotoSRC}>`;
  }
}

export default Image;
