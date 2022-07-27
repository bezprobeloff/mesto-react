import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

const Main = (props) => {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([userData, dataCards]) => {
        setUserName(userData.name);
        setDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(dataCards);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container"  onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar-image"/>
        </div>
        <div className="profile__info">
          <div className="profile__container-name">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile} aria-label="Редактировать"></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace} aria-label="Добавить"></button>
      </section>
      <section className="cards" aria-label="Фотокарточки">
        {cards.map((card, i) =>
          <Card card={card} key={i} onCardClick={props.onCardClick}/>
        )}
      </section>
    </main>
  );
}

export default Main;
