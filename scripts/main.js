const wrapperModal = document.querySelector('.wrapper-modal');
const burgerLink = document.querySelector('.burger_link');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const wrapperModalRegistred = document.querySelector('.wrapper-modal-registred');
const modalRegistred= document.querySelector('.modal-registred');
const registredBtn = document.querySelector('.register-btn');

// open and close pop-up burger menu 

burgerLink.addEventListener('click', (ev) => {
  wrapperModal.classList.toggle('open-modal');
  wrapperModal.classList.toggle('scale-up-left');
  wrapperModal.classList.remove('scale-down-bl');
})

const removeModal = (el, ev) => {
  el.classList.remove('open-modal');
  el.classList.remove('scale-up-left');
  el.classList.toggle('scale-down-bl');
  ev.preventDefault();
}

wrapperModal.addEventListener('click', (ev) => {
  const { className } = ev.target
  if(className === 'close' || className === 'close-img') {
    removeModal(wrapperModal, ev)
  }

})

modal.addEventListener('click', (ev) => {
  const { className } = ev.target
  if(className === 'modal') {
    wrapperModal.classList.remove('open-modal');
    wrapperModal.classList.remove('scale-up-left');
    wrapperModal.classList.toggle('scale-down-bl');
  }

})

// ***open and close pop-up registration

registredBtn.addEventListener('click', (ev) => {
  wrapperModalRegistred.classList.toggle('open-modal');
  wrapperModalRegistred.classList.toggle('scale-up-left');
  wrapperModalRegistred.classList.remove('scale-down-bl');
})

wrapperModalRegistred.addEventListener('click', (ev) => {
  const { className } = ev.target
  if(className === 'close' || className === 'close-img') {
    removeModal(wrapperModalRegistred, ev)
  }
})

modalRegistred.addEventListener('click', (ev) => {
  const { className } = ev.target
  if(className === 'modal-registred modal') {
    wrapperModalRegistred.classList.remove('open-modal');
    wrapperModalRegistred.classList.remove('scale-up-left');
    wrapperModalRegistred.classList.toggle('scale-down-bl');
  }
})