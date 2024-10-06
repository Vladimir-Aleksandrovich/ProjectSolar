import { hideModal } from "./modal";
import { hideModalWindow } from "./modal";
import { showModalWindow } from "./modal";
import { postData } from "../services/services";

function form(formSelector, nameSelector, phoneSelector, crossSelector2, modalSelector) {
  const modalForm = document.querySelector(formSelector),
        nameInput = document.querySelector(nameSelector),
        phoneInput = document.querySelector(phoneSelector),
         modalBg = document.querySelector(modalSelector),
    
      message = {
      loading: "Загрузка",
      done: `Спасибо! <br> Мы скоро с вами свяжемся!`,
      error: "Ошибка",
    };

  function checkInput(input, regexp, warningMessage) {
    input.addEventListener("input", () => {
      //  доделать ввод
      if (input.value.match(regexp)) {
        input.value = "";
        input.style.background = "black";
        input.placeholder = warningMessage;
      } else input.style.background = "";
    });
  }

  checkInput(nameInput, /[0-9]/gi, "Введите имя!");
  checkInput(phoneInput, /[A-Za-zА-яа-я]/gi, "Введите телефон!");

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(modalForm);
    // const req = new XMLHttpRequest();
    console.log(formData);
    let messageBox = document.createElement("div");
    messageBox.classList.add("modal");
    let messageText = message.done;
    messageBox.innerHTML = `
  <div class="modal__window">
  <p>${messageText}</p>
  <div class="modal__cross">
    <img class="modal__cross-img" src="img/Krestik.svg">
  </div>
  </div>`;
    document.body.append(messageBox);
    const cross2 = messageBox.querySelector(crossSelector2);

    let p = messageBox.querySelector("p");

    p.style.fontSize = "30px";

    let obj = {};
    formData.forEach((value, i) => {
      obj[i] = value;
    });

    //fetch
  

    postData("http://localhost:3000/customers", JSON.stringify(obj))
      .then(() => {
        hideModalWindow(modalBg);
        showModalWindow(messageBox);
        hideModal(messageBox, cross2);
      })
      .catch((messageText = message.error))
      .finally(() => {
        modalForm.reset();
      });

    // data form

    //   fetch("js/BD.json", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //      body : data1
    //   }).then(data => data.json())
    //     .then(data => {
    //      data.customers.push(data1)
    //         console.log(data)
    //         hideModalWindow(modalBg)
    //         showModalWindow(messageBox)
    //         hideModal(messageBox, cross2)
    //       })
    // .catch(messageText = message.error)
    //   .finally(() => {
    //       modalForm.reset()
    // })

    // XMLLHttp
    // req.open("POST", "server.php");
    // req.setRequestHeader("Content-type", "application/json");
    // let obj = {};
    // formData.forEach((value, key) => {
    //   obj[key] = value;
    // });
    // let json = JSON.stringify(obj);
    // req.send(json);
    // console.log(json);
    // req.addEventListener("load", function () {
    //   if (req.status == 200) {

    //     hideModalWindow(modalBg);
    //     showModalWindow(messageBox);
    //     hideModal(messageBox, cross2);

    //   } else messageBox.textContent = message.error;
    // });
  });
}

export default form;
