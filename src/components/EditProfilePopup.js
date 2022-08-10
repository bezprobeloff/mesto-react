import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({isOpen, onClose}) => {
  return (
    <PopupWithForm title='Редактировать профиль' name='edit-profile'
    isOpen={isOpen} onClose={onClose}>
      <>
      <input className='popup__input popup__input_type_user-name'
        type='text' name='name' id='user-name' placeholder='Имя'
        minLength='2' maxLength='40' defaultValue='Имя пользователя' required/>
      <span className='popup__input-error popup__input-error_type_user-name'></span>
      <input className='popup__input popup__input_type_user-job'
        type='text' name='job' id='user-job' placeholder='О себе'
        minLength='2' maxLength='200' defaultValue='Профессия пользователя' required/>
      <span className='popup__input-error popup__input-error_type_user-job'></span>
      </>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
