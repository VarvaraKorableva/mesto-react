import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, showLoading}) {

  const editAvatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: editAvatarRef.current.value/* Значение инпута, полученное с помощью рефа */
    });
  } 

  return (
    <PopupWithForm 
      name="update-avatar" 
      title="Update avatar"
      submitName={showLoading ? 'Preservation...' : 'Save'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <input
          id="avatar-link"
          name="avatar"
          type="url"
          placeholder="Link to picture"
          className="popup__input popup__avatar-link"
          required 
          ref={editAvatarRef}/>
        <span 
          className="popup__error popup__error_visible avatar-link-error">
        </span>
    </PopupWithForm>
  );
}
  
export default EditAvatarPopup;
