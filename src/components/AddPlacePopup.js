import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace, showLoading}) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
    name,
    link
    });
  }

  return (
    <PopupWithForm 
      name="popup-AddPicture" 
      title="New picture"
      submitName={showLoading ? 'Preservation...' : 'Create'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <input
          id="nameOfPicture"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder="Name"
          className="popup__input"
          required 
          value={name || ""}
          onChange={handleNameChange}/>
        <span className="popup__error popup__error_visible nameOfPicture-error" />
        <input
          id="linkOfPicture"
          name="link"
          type="url"
          placeholder="Link to picture"
          className="popup__input"
          required 
          value={link || ""}
          onChange={handleLinkChange}/>
        <span id="spanOfPicture" className="popup__error popup__error_visible linkOfPicture-error" />
    </PopupWithForm>
  );
}
  
export default AddPlacePopup;
