// popup для редактирования данных в профиле

const popupProfile = document.querySelector('.popup_type_profile'); //попап для рекдактирования текстовой информации
const popupProfileOpenButton = document.querySelector('.profile__edit-button'); //кнопка открытия
const popupProfileCloseButton = popupProfile.querySelector('.popup__close-icon'); //кнопка закрытия

const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');

const popupFormElement = popupProfile.querySelector('.popup__form_type_profile');

const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');

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

function handleSubmitProfileForm (evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

popupFormElement.addEventListener('submit', handleSubmitProfileForm);

//==================================

// popup для добавления карточек на страницу

const popupCard = document.querySelector('.popup_type_cards'); //попап для добавления фото
const popupCardsAddButton = document.querySelector('.profile__add-button'); //кнопка открытия
const popupCardsCloseButton = popupCard.querySelector('.popup__close-icon_type_cards'); //кнопка закрытия

const titleInput = popupCard.querySelector('.popup__input_type_title');
const linkInput = popupCard.querySelector('.popup__input_type_link');

const formElementCard = popupCard.querySelector('.popup__form_type_cards');

const cardsContainer = document.querySelector('.element'); //находим список ul с классом element, чтобы туда поместить блок с новой карточкой

popupCardsAddButton.addEventListener('click', function() {
  openPopup(popupCard);
});

popupCardsCloseButton.addEventListener('click', function() {
  closePopup(popupCard);
});

function handleSubmitAddCardForm (evt) {
  evt.preventDefault();
  const newCard = {text: titleInput.value, link: linkInput.value};
  const cardItem = createCard(newCard);
  cardsContainer.prepend(cardItem);
  closePopup(popupCard);
}

formElementCard.addEventListener('submit', handleSubmitAddCardForm);

//==================================

// функция создания карточки (через метод template)
const popupImage = document.querySelector('.popup_type_image'); // попап для открытия картинок
const popupImageOpen = popupImage.querySelector('.element__image'); // попап с картинкой открывается при нажатии на изображение
const popupImageCloseButton = popupImage.querySelector('.popup__close-icon_type_image'); // кнопка закрытия
const popupImagePhoto = popupImage.querySelector('.popup__photo');
const popupImageFigcap = popupImage.querySelector('.popup__figcap');

const listItemTemplate = document.querySelector('#template-element').content;

const createCard = function(card){
  const cardElement = listItemTemplate.cloneNode(true);

  cardElement.querySelector('.element__image').src = card.link; // добавляем ссылку на карточку
  cardElement.querySelector('.element__image').alt = card.text; // добавляем текст в alt
  cardElement.querySelector('.element__title').textContent = card.text; // добавляем название карточки

  cardElement.querySelector('.element__heart-button').addEventListener('click', function(evt) { // добавляем слушатель на кнопку лайка
    evt.target.classList.toggle('element__heart-button_active'); // меняем состояние кнопки лайка с обычного на активный и наоборот
  });

  cardElement.querySelector('.element__trash-button').addEventListener('click', function(evt) { // добавляем слушатель на кнопку удаления карточки (корзинка)
    evt.target.closest('.element__item').remove(); // удаляем карточку методом closest
  });

  cardElement.querySelector('.element__image').addEventListener('click', function (evt) { // добавляем слушатель на картинку, чтобы при клике на нее открывался попап с полномасштабным изображением
      popupImagePhoto.src=evt.target.src;
      popupImagePhoto.alt=evt.target.alt;
      popupImageFigcap.textContent=evt.target.alt;
      openPopup(popupImage);
  });

  popupImageCloseButton.addEventListener('click', function() {
    closePopup(popupImage);
  });

  return cardElement; // возвращаем полностью готовую карточку со всеми слушателями
};

initialCards.forEach((element) => {
  const card = createCard(element);
  cardsContainer.prepend(card);  // добавляем карточку на страницу вначало с помощью prepend
})
