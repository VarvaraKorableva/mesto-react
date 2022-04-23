import React from 'react';

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

    return ( 
      <>
      <div className="card">
      <div className="card__img-container">
        <img className="card__image" 
               alt = {props.card.name} 
               src = {props.card.link}
               onClick={handleCardClick}
        />
        <button className="card__delete-button" type="button"></button>
      </div>
      <div className="card__container">
        <h2 className="card__text">{props.card.name}</h2>
        <div className="card__likes-container">
          <button className="card__like-button" type="button"></button>
          <p className="card__counter">{props.card.likes.length}</p>
        </div>
      </div>
      </div>
      </>
    ) 
   }

   export default Card;
