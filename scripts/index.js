// popup для редактирования данных в профиле

const popupProfile = document.querySelector('.popup'); //попап для рекдактирования текстовой информации
const popupProfileOpenButton = document.querySelector('.profile__edit-button'); //кнопка открытия
const popupProfileCloseButton = document.querySelector('.popup__close-icon'); //кнопка закрытия

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');

const popupFormElement = document.querySelector('.popup__form');

// общие функции для открытия/закрытия всех попапов
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

popupProfileOpenButton.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;
});

popupProfileCloseButton.addEventListener('click', function() {
  closePopup(popupProfile)
});

function profileFormSubmitHandler (evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

popupFormElement.addEventListener('submit', profileFormSubmitHandler);

//==================================

// popup для добавления карточек на страницу

const popupCards = document.querySelector('.popup_type_cards'); //попап для добавления фото
const popupCardsAddButton = document.querySelector('.profile__add-button'); //кнопка открытия
const popupCardsCloseButton = document.querySelector('.popup__close-icon_type_cards'); //кнопка закрытия

const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

const formElementCards = document.querySelector('.popup__form_type_cards');

const cardsContainer = document.querySelector('.element'); //находим список ul с классом element, чтобы туда поместить блок с новой карточкой

popupCardsAddButton.addEventListener('click', function() {
  openPopup(popupCards);
});

popupCardsCloseButton.addEventListener('click', function() {
  closePopup(popupCards);
});

function cardFormSubmitHandler (evt) {
  evt.preventDefault();
  const newCard = {text: titleInput.value, link: linkInput.value};
  const cardItem = createCard(newCard);
  cardsContainer.prepend(cardItem);
  closePopup(popupCards);
}

formElementCards.addEventListener('submit', cardFormSubmitHandler);

//==================================

// функция создания карточки (через метод template)
const createCard = function(card){
  const listItemTemplate = document.querySelector('#template-element').content;
  const cardElement = listItemTemplate.cloneNode(true);

  cardElement.querySelector('.element__image').src = card.link; // добавляем ссылку на карточку
  cardElement.querySelector('.element__image').alt = card.text; // добавляем текст в alt
  cardElement.querySelector('.element__title').textContent = card.text; // добавляем название карточки

  return cardElement;
};

initialCards.forEach((element) => {
  const card = createCard(element);
  cardsContainer.prepend(card)
})

// ==============

// popup для открытия картинок в полномасштабном размере

const popupImage = document.querySelector('.popup_type_image'); // попап для открытия картинок
const popupImageOpenButton = popupImage.querySelector('.element__image'); // попап с картинкой открывается при нажатии на изображение
const popupImageCloseButton = popupImage.querySelector('.popup__close-icon_type_image'); // кнопка закрытия
const popupImagePhoto = popupImage.querySelector('.popup__photo');
const popupImageFigcap = popupImage.querySelector('.popup__figcap');

// открытие попапа с картинкой при клике на изображение
cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__image')) {
    popupImagePhoto.src=evt.target.src;
    popupImagePhoto.alt=evt.target.alt;
    popupImageFigcap.textContent=evt.target.alt;
    openPopup(popupImage);
  }
});

// закрытие попапа с картинкой при клике на кнопку закрытия
popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage);
});

// ==============

//Вешаем на родительский элемент (element) обработчик событий лайка (поставить/удалить)
cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__heart-button')) { // создаем условие - если есть evt.target и класс 'element__heart-button', то при нажатии происходит переключение на класс _active, и наоборот
    evt.target.classList.toggle('element__heart-button_active'); // toogle - переключает один класс на другой при клике
  }
});

//Вешаем на родительский элемент обработчик событий удаления карточки
cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__trash-button')) { // создаем условие - если есть evt.target и класс 'element__trash-button', то при нажатии на кнопку происходит удаление элемента
    evt.target.closest('.element__item').remove();
  }
});

