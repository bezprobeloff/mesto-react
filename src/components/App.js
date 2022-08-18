import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';

const App = () => {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({name: 'user', about: 'about', avatar: ''});

  useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([user, dataCards]) => {
        setCurrentUser(user);
        setCards(dataCards);
      })
      .catch(err => console.log(err));
  }, []);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
    document.addEventListener('keydown', handleEscClosePopup);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
    document.addEventListener('keydown', handleEscClosePopup);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
    document.addEventListener('keydown', handleEscClosePopup);
  };

  const handleDeleteCardClick = (card) => {
    setConfirmPopupOpen(true);
    setSelectedCard(card);
    document.addEventListener('keydown', handleEscClosePopup);
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

  const handleCardDelete = () => {
    api.removeCard(selectedCard?._id)
      .then(() => {
        setCards(cards.filter(item => item._id !== selectedCard?._id));
      })
      .catch(err => console.log(err))
      .finally(() => closeAllPopups());
  };

  const handleAddPlace = ({name, link}) => {
    api.createCard({name, link})
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

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

  const handleEscClosePopup = (evt) => {
    if (evt.key !== 'Escape') return;

    closeAllPopups();
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setImagePopupOpen(false);
    document.removeEventListener('keydown', handleEscClosePopup);
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
          onCardDelete={handleDeleteCardClick}
        />
      <Footer/>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onUpdateUser={handleUpdateUser}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onUpdateAvatar={handleUpdateAvatar}
        onClose={closeAllPopups}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onAddPlace={handleAddPlace}
        onClose={closeAllPopups}
      />
      <ConfirmPopup
        isOpen={isConfirmPopupOpen}
        onDeleteCard={handleCardDelete}
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
