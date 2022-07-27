import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';



function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
    //<PopupWithForm title='Обновить аватар' name='update-avatar' isOpen={isEditAvatarPopupOpen}/>
    //const popup = document.querySelector('.popup_type_update-avatar');
    //popup.classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
    //const popup = document.querySelector('.popup_type_edit-profile');
    //popup.classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
    //const popup = document.querySelector('.popup_type_add-card');
    //popup.classList.add('popup_opened');
  };


  return (
    <div className="page__content">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer/>

    </div>
  );
}

export default App;
