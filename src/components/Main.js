import React from 'react';
import {api} from '../utils/Api';
import Card from '../components/Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserdescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
/*
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([{name, about, avatar}, cardList]) => {
      setCards(cardList);
      const card = cardList.map(data => {
        return {
          name: data.name,
          link: data.link,
          likes: data.likes,
          id: data._id,
          ownerId: data.owner._id
        }
      });
      setUserName(name);
      setUserdescription(about);
      setUserAvatar(avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);*/

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([{name, about, avatar}, cards]) => {
      setCards(cards);
      setUserName(name);
      setUserdescription(about);
      setUserAvatar(avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);


  return (
    <main>
    <section className="profile">
      <div className="profile__contaner">
        <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img src={userAvatar} className="profile__avatar" alt="фото" />
        </button>
        
        <div className="profile__info">
          <h1 className="profile__name" id="profile__name">{userName}</h1>
          <button className="profile__edit-button" aria-label="Редактирование" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__job" id="profile__job">{userDescription}</p>
        </div>
        </div>
        <button id="profile__add-button" className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
    </section>
    
    <section className="cards">
      {cards.map((card)=> (
        <Card
          key={card._id}
          card={card}
          onCardClick={props.onCardClick}
        />
      ))}
    </section>

    </main>
  )
}
  
export default Main;

