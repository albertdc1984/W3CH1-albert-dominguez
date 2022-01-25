import Card from "card.js";

class Image extends Card {
  parentElement = document.querySelector(".character__card");

  constructor(parentElement, className, image) {
    super(parentElement, "character__picture card-img-top", "img");
    parentElement.append(this.element);
    this.element.src = image;
  }
}

export default Image;
