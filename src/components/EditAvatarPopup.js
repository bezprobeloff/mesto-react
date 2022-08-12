import PopupWithForm from "./PopupWithForm";
import { useState, useEffect, useRef, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {
  const currentUser = useContext(CurrentUserContext);
  const inputAvatarRef = useRef();
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setAvatar(inputAvatarRef.name);
  }, [currentUser]);

  const handleChangeAvatar = (evt) => {

  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <PopupWithForm title='Обновить аватар' name='update-avatar'
    isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <>
      <input className='popup__input popup__input_type_avatar'
        type='url' name={avatar} ref={inputAvatarRef} id='avatar'
        placeholder='Ссылка на аватарку' minLength='2' required/>
      <span className='popup__input-error popup__input-error_type_avatar'></span>
      </>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
