import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App(props) {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});

function handleCardClick(card) {
  setSelectedCard(card);
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
}

function closeAllPopups() {
 setIsEditAvatarPopupOpen(false); 
 setIsAddPlacePopupOpen(false);
 setIsEditProfilePopupOpen(false);
 setSelectedCard({});
}

  return (
    <div className="body">
    <div className="page">
      <Header />
      <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick} 
      onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
      name="popup-profile" 
      title="Редактировать профиль"
      submitName="Сохранить"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}>
        <input
          required
          id="name"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          className="popup__input"
          placeholder="Имя" />
        <span className="popup__error popup__error_visible name-error" />
        <input
          required
          id="job"
          name="about"
          type="text"
          minLength="2"
          maxLength="200"
          className="popup__input"
          placeholder="Профессиональная деятельность" />
        <span className="popup__error popup__error_visible job-error" />
      </PopupWithForm>

      <PopupWithForm 
      name="popup-AddPicture" 
      title="Новое место"
      submitName="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>
        <input
          id="nameOfPicture"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          className="popup__input"
          required />
        <span className="popup__error popup__error_visible nameOfPicture-error" />
        <input
          id="linkOfPicture"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input"
          required />
        <span id="spanOfPicture" className="popup__error popup__error_visible linkOfPicture-error" />
      </PopupWithForm>

      <PopupWithForm 
      name="update-avatar" 
      title="Обновить аватар"
      submitName="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}>
        <input
          id="avatar-link"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__avatar-link"
          required />
        <span className="popup__error popup__error_visible avatar-link-error"></span>
      </PopupWithForm>

      <PopupWithForm 
      name="areYouSureToDelete"
      title="Вы уверены?"
      submitName="Да"
      onClose={closeAllPopups}
      />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
    </div>
  );
}
export default App;
