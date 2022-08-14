import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from 'react';

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {
  const inputAvatarRef = useRef();

  useEffect(() => {
    inputAvatarRef.value = '';
  }, [isOpen]);

  const handleChangeAvatar = (evt) => {
    inputAvatarRef.value = evt.target.value;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateAvatar(inputAvatarRef.value);
  };

  return (
    <PopupWithForm title='Обновить аватар' name='update-avatar'
    isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <>
      <input className='popup__input popup__input_type_avatar'
        type='url' name='avatar' ref={inputAvatarRef} onChange={handleChangeAvatar}
        id='avatar' placeholder='Ссылка на аватарку' minLength='2' required/>
      <span className='popup__input-error popup__input-error_type_avatar'></span>
      </>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
