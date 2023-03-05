const popups = document.querySelectorAll('.popup');

const imagePopup = document.querySelector('.popup_type_image');
const fullImage = imagePopup.querySelector('.popup__image');
const fullImageDescription = imagePopup.querySelector('.popup__image-description');


function openPopup(popup) {
  popup.classList.add('popup_opened');
  root.classList.add('overflow');
  document.addEventListener('keydown', keydownPopupHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keydownPopupHandler);
  if (popup.classList.contains('popup_type_afisha') || popup.classList.contains('popup_type_spectacles')) {
    root.classList.remove('overflow');
    clearImages();
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
})


const keydownPopupHandler = (evt) => {
  if (evt.key === 'Escape') {
    const popups = document.querySelectorAll('.popup_opened');
    popups.forEach((popup) => {
      closePopup(popup);
    })
  }
}
