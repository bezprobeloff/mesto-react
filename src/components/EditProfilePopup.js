import PopupWithForm from './PopupWithForm';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeDescription = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm title='Редактировать профиль' name='edit-profile'
    isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <>
      <input className='popup__input popup__input_type_user-name'
        value={name} onChange={handleChangeName}
        type='text' name='name' id='user-name' placeholder='Имя'
        minLength='2' maxLength='40' required/>
      <span className='popup__input-error popup__input-error_type_user-name'></span>
      <input className='popup__input popup__input_type_user-job'
        value={description} onChange={handleChangeDescription}
        type='text' name='job' id='user-job' placeholder='О себе'
        minLength='2' maxLength='200' required/>
      <span className='popup__input-error popup__input-error_type_user-job'></span>
      </>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
