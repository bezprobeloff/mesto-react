import PopupWithForm from './PopupWithForm';
import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useInput from '../pages/hooks/useInput';

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
  const currentUser = useContext(CurrentUserContext);
  const inputName = useInput(currentUser.name);
  const inputAbout = useInput(currentUser.about);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name: inputName.value,
      about: inputAbout.value
    });
  };

  useEffect(() => {
    inputName.reset();
    inputAbout.reset();
    inputName.setValue(currentUser.name);
    inputAbout.setValue(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit-profile'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormNotValid={inputName.isError || inputAbout.isError}
    >
      <>
      <input
        className='popup__input popup__input_type_user-name'
        value={inputName.value}
        onChange={inputName.onChange}
        type='text'
        name='name'
        id='user-name'
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        required
      />
      <span
        className='popup__input-error popup__input-error_type_user-name'>
        {inputName.errorMessage}
      </span>
      <input
        className='popup__input popup__input_type_user-job'
        value={inputAbout.value}
        onChange={inputAbout.onChange}
        type='text'
        name='about'
        id='user-about'
        placeholder='О себе'
        minLength='2'
        maxLength='200'
        required
      />
      <span
        className='popup__input-error popup__input-error_type_user-job'>
        {inputAbout.errorMessage}
      </span>
      </>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
