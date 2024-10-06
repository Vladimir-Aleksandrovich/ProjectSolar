
function hideModalWindow(element) {
  document.body.style.overflowY = "scroll";
  element.classList.add("hide");
  element.classList.remove("show");
}

function hideModal(elem, elem2) {
  elem.addEventListener("click", (e) => {
    if (e.target == elem || e.target == elem2) {
      hideModalWindow(elem);
    }
  });
}

function showModalWindow(elem) {
  document.body.style.overflowY = "hidden";
  elem.classList.add("show");
  elem.classList.remove("hide");
}

function modal(formBtnSelector, modalSelector, crossSelector) {
   const contactUsBtn = document.querySelector(formBtnSelector),
         modalBg = document.querySelector(modalSelector),
         crossBtn = document.querySelector(crossSelector);
  let i = 0;

  // function showModalWindow(selector) {
  //   body.style.overflowY = "hidden";
  //   selector.classList.add("show");
  //   selector.classList.remove("hide");
  // }

  // let hideModalWindow = (selector) => {
  //   body.style.overflowY = "scroll";
  //   selector.classList.add("hide");
  //   selector.classList.remove("show");
  // };

  contactUsBtn.addEventListener("click", () => {
    showModalWindow(".modal");
  });

  // function hideModal(selector, selector2) {
  //   selector.addEventListener("click", (e) => {
  //     if (e.target == selector || e.target == selector2) {
  //       hideModalWindow(selector);
  //     }
  //   });
  // }
  hideModal(modalBg, crossBtn);

  window.addEventListener("scroll", () => {
    if (
      document.documentElement.clientHeight +
        document.documentElement.scrollTop ==
        document.documentElement.scrollHeight &&
      i != 1
    ) {
      i = 1;
      showModalWindow(modalBg);
    }
  });
}

export default modal;

export { showModalWindow };
export { hideModalWindow };
export { hideModal };

