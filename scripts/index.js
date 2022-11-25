const popup = document.querySelector('.popup'); //попап
const openButton = document.querySelector('.profile__edit-button'); //кнопка открытия
const closeButton = document.querySelector('.popup__close-icon'); //попап закрытия


openButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});

