import React, {useState, useEffect, useContext} from 'react';
import { api } from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = (props) => {
  const currentUser = useContext(CurrentUserContext);
  /*
  const [userName, setUserName] = useState('');
  const [userDescription, setDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  */
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then((dataCards) => {
        setCards(dataCards);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container"  onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__avatar-image"/>
        </div>
        <div className="profile__info">
          <div className="profile__container-name">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile} aria-label="Редактировать"></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace} aria-label="Добавить"></button>
      </section>
      <section className="cards" aria-label="Фотокарточки">
        {cards.map(card =>
          <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
        )}
      </section>
    </main>
  );
}

export default Main;
