const popup = document.querySelector('.popup'); //попап
const openButton = document.querySelector('.profile__edit-button'); //кнопка открытия
const closeButton = document.querySelector('.popup__close-icon'); //кнопка закрытия

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');

const formElement = document.querySelector('.popup__form');


openButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;
});

closeButton.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);


