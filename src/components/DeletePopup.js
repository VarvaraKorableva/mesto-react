import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePopup({isOpen, onClose, showLoading, card, onCardDelete}) {

  function handleDeleteClick(e) {
    e.preventDefault();
    onCardDelete(card);
  }
 

  return (
    <PopupWithForm 
      name="areYouSureToDelete"
      title="Are you sure you want to delete?"
      submitName={showLoading ? 'Removal...' : 'Yes'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDeleteClick} />
  );
}
  
export default DeletePopup;

