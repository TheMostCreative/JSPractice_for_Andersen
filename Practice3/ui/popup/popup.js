'use strict';


	const openBtn = document.getElementById('open-modal-btn');
	const closeBtn = document.getElementById('close-modal-btn');
	const modal = document.getElementById('modal');

	openBtn.addEventListener('click', () => {
	    modal.classList.add('open');
	});

	closeBtn.addEventListener('click', () => {
	    modal.classList.remove('open');
	});