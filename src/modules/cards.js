function cards(parentTagSelector) {
  let parentTag = document.querySelector(parentTagSelector);
  class TabItem {
    constructor(header, text, img, parent) {
      this.header = header;
      this.text = text;
      this.img = img;
      this.parent = parent;
    }
    render() {
      let div = document.createElement("div");
      div.classList.add("card__wrapper");
      div.style.background = this.img;
      div.style.backgroundSize = "cover";
      div.innerHTML = `<p class="card__header">${this.header}</p>
      <p class="card__text">${this.text}</p>`;
      this.parent.append(div);
    }
  }

  fetch("http://localhost:3000/tabs")
    .then((data) => data.json())
    .then((data) =>
      data.forEach(({ title, text, img }) => {
        new TabItem(title, text, img, parentTag).render();
      })
    );
}

export default cards;