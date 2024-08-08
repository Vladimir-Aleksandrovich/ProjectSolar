let tabs = document.querySelectorAll('.tab'),
    readMoreBtn = document.querySelector(".read__more__btn")


    function addActiveClass(i) {
        tabs[i].classList.add('active__tab');
    }

    function removeActiveClass(list, activeClass) {
           list.forEach(el => {
            el.classList.remove(activeClass);
           })
}

 tabs.forEach((el, j) => {
    el.addEventListener("click", (event) => {
      removeActiveClass(tabs, "active__tab")
     addActiveClass(j)
  })
 })


 readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
 })