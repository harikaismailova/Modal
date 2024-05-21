'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  //  modal.style.display = 'none';
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  // console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
//Escape key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* btnCloseModal.addEventListener('click', function () {
  console.log('button clicked');
  //  modal.style.display = 'none';
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */
