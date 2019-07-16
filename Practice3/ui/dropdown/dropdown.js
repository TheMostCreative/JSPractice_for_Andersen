'use strict';


{
    const root = document.querySelector('.toggle-drop');
    
    function dropdown(event) {
        event.preventDefault();
        root.nextSibling.nextSibling.classList.toggle('dropdown__list--active');
        root.classList.toggle('dropdown__btn--active');
    }

    root.addEventListener('click', dropdown);

}
   
