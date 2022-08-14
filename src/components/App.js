import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

const App = () => {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({name: 'user', about: 'about', avatar: ''});

  useEffect(() => {
    api.getUser()
      .then(res => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((dataCards) => {
        setCards(dataCards);
      })
      .catch(err => console.log(err));
  }, []);


  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(cards.map(item => item._id === card._id ? newCard : item));
      })
      .catch(err => console.log(err));
  };

  const handleCardDelete = (card) => {
    api.removeCard(card._id)
      .then(() => {
        setCards(cards.filter(item => item._id !== card._id));
      })
      .catch(err => console.log(err));
  };

  const handleUpdateUser = ({name, about}) => {
    api.setUserInfo({name, about})
      .then(() => {
        setCurrentUser({...currentUser, name, about});
        closeAllPopups();
      })
      .catch(err => console.log(err));
  };

  const handleUpdateAvatar = (avatar) => {
    api.updateAvatar(avatar)
      .then(() => {
        setCurrentUser({...currentUser, avatar});
        closeAllPopups();
      })
      .catch(err => console.log(err));
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="page__content">
      <Header/>
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      <Footer/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser}
        onClose={closeAllPopups}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar}
        onClose={closeAllPopups}/>
      <PopupWithForm
        title='Новое место'
        name='add-card'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
