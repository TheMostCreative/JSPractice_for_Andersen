'use strict'

const TabSet = () => {

    const bindC = () => {

      const menuElems = document.querySelectorAll('[data-tab]');

      for(let i = 0; i < menuElems.length ; i++) {
        menuElems[i].addEventListener('click', change, false);
      }
    }
    const removeActive = () => {
      const menuElems = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElems.length ; i++) {

          menuElems[i].classList.remove('active');
          const id = menuElems[i].getAttribute('data-tab');
          document.getElementById(id).classList.remove('active');

        }
    }

  const change = (e) => {
    removeActive();
    e.target.classList.add('active');
    const id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindC();

}

TabSet();

