function tabs(tabsSelector, bodySelector, btnSelector, activeClassSelector) {
    // const tabs = document.querySelectorAll(".tab"),
    // body = document.querySelector("body"),
    // readMoreBtn = document.querySelector(".read-more-btn");
    const tabs = document.querySelectorAll(tabsSelector),
    body = document.querySelector(bodySelector),
    readMoreBtn = document.querySelector(btnSelector);

  const addActiveClass = (i) => {
    tabs[i].classList.add(activeClassSelector);
  };

  function removeActiveClass(list, activeClass) {
    list.forEach((el) => {
      el.classList.remove(activeClass);
    });
  }

  tabs.forEach((el, j) => {
    el.addEventListener("click", () => {
      removeActiveClass(tabs, activeClassSelector);
      addActiveClass(j);
    });
  });

  readMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });

}

export default tabs;