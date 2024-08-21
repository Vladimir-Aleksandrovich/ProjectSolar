const tabs = document.querySelectorAll(".tab"),
  body = document.querySelector("body"),
  readMoreBtn = document.querySelector(".read-more-btn");

const addActiveClass = (i) => {
  tabs[i].classList.add("active-tab");
};

function removeActiveClass(list, activeClass) {
  list.forEach((el) => {
    el.classList.remove(activeClass);
  });
}

tabs.forEach((el, j) => {
  el.addEventListener("click", () => {
    removeActiveClass(tabs, "active-tab");
    addActiveClass(j);
  });
});

readMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

// Счетчик временни

let deadLine = new Date("2024-08-18");
const secondsDiv = document.querySelector(".seconds"),
  minutesDiv = document.querySelector(".minutes"),
  hoursDiv = document.querySelector(".hours"),
  daysDiv = document.querySelector(".days");

setInterval(() => {
  let minutesLeft, secondsLeft, hoursLeft, daysLeft;
  let now = new Date();
  let dayCounter = 1;
  checkDate();

  secondsLeft = Math.floor(((deadLine - now) / 1000) % 60);
  minutesLeft = Math.floor(((deadLine - now) / (1000 * 60)) % 60);
  hoursLeft = Math.floor(((deadLine - now) / (1000 * 60 * 60)) % 24) - 3;
  daysLeft = Math.floor((deadLine - now) / (1000 * 60 * 60 * 24));

  secondsDiv.innerHTML = `${secondsLeft}`;
  minutesDiv.innerHTML = `${minutesLeft}`;
  hoursDiv.innerHTML = `${hoursLeft}`;
  daysDiv.innerHTML = `${daysLeft}`;

  function checkNumber(number, container) {
    if (number < 10) {
      container.innerHTML = `0${number}`;
    }
  }
  function checkDate() {
    if (deadLine - now <= 0) {
      deadLine = new Date(Date.parse(deadLine) + 86400000 * dayCounter);
      dayCounter++;
      console.log(deadLine);
      return deadLine;
    }
  }

  checkNumber(daysLeft, daysDiv);
  checkNumber(hoursLeft, hoursDiv);
  checkNumber(minutesLeft, minutesDiv);
  checkNumber(secondsLeft, secondsDiv);
}, 1000);

// modal window
const contactUsBtn = document.querySelector(".contact-us-btn"),
  modalBg = document.querySelector(".modal"),
  modalWindow = document.querySelector(".modal__window"),
  modalForm = document.querySelector(".modal__form"),
  cross = document.querySelector(".modal__cross-img");

let showModalWindow = () => {
  body.style.overflowY = "hidden";
  modalBg.classList.add("show");
  modalBg.classList.remove("hide");
}

let hideModalWindow = () => {
    body.style.overflowY = "scroll";
    modalBg.classList.add("hide");
    modalBg.classList.remove("show");
}


contactUsBtn.addEventListener("click", () => {
   showModalWindow()
});

modalBg.addEventListener("click", (e) => {
    if (e.target == modalBg || e.target == cross) {
    hideModalWindow()
    }
})



window.addEventListener("scroll", () => {
    console.log(document.documentElement.scrollHeight)
    console.log(document.documentElement.clientHeight + document.documentElement.scrollTop)
  if (
    document.documentElement.clientHeight + document.documentElement.scrollTop ==
    document.documentElement.scrollHeight
  ){
    showModalWindow();
  }
}
);

//  Create tabs
let parentTag = document.querySelector(".our-experience-section .cards");
class TabItem {
  constructor(header, text, parent) {
    this.header = header;
    this.text = text;
    this.parent = parent;
  }
  render() {
    let div = document.createElement("div");
    div.classList.add("card__wrapper");
    div.innerHTML = ` <p class="card__header">${this.header}</p>
      <p class="card__text">${this.text}</p>`;
    this.parent.append(div);
  }
}

new TabItem(
  "Solar <br>Solutions</p>",
  `Harness the power of the sun and embrace clean, renewable energy with our
    solar solutions.`,
  parentTag
).render();

new TabItem(
  "Cable <br>Services",
  `Stay connected with high-quality cable services that deliver reliable and
    fast internet, television.`,
  parentTag
).render();

new TabItem(
  "Internet <br> Solutions",
  `From fast broadband to fiber-optic connections, we'll help you find the
    internet service provider.`,
  parentTag
).render();

new TabItem(
  "Phone <br>Services</p>",
  `Discover cost-effective and feature-rich phone services that keep you
    connected to your loved ones.`,
  parentTag
).render();


 // data form