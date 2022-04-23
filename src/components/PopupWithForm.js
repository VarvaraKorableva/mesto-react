import React from 'react';

function PopupWithForm(props) {
    return (
      <aside className={`popup ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <button className="popup__close-button" type="button" onClick={props.onClose}></button>
          <form className="popup__form" name={props.name} noValidate>
            <h3 className="popup__title">{props.title}</h3>
            {props.children}
            <button type="submit" className="popup__button">{props.submitName}</button>
          </form>
        </div>
      </aside>
  );
}
  
export default PopupWithForm;
