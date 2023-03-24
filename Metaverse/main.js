
  //crate modal box for my forma class
  function myFunction() {
    let modal = document.querySelector(".forma");
    modal.style.opacity = "1";
    modal.style.display = "flex";
  
  }
// burger menu
(function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__menu_left');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
})();
// search toggle and search bug fix
(function () {
    const search = document.querySelector('.fas');
    const form = document.querySelector('.form');
    const headerLeft = document.querySelector('.header__menu_left');
    // let width = window.innerWidth;
    search.onclick = function () {
        form.classList.toggle('active_search');
    }

    search.addEventListener('click', () => {
        search.classList.toggle('active_search')

    });
})();




// mushroom
let cursor = document.querySelector('.cursor__folower');
document.body.onmousemove = function (e) {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
}
