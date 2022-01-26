import Component from "./Component.js";

class Images extends Component {
  constructor(parentElement, source) {
    super(parentElement, "card-img-top", "img");

    this.element.src = source;
  }
}

export default Images;
