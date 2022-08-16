import PopupWithForm from "./PopupWithForm";
import { useRef, useState, useEffect } from 'react';
import useInput from "../pages/hooks/useInput";

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {
  const inputAvatarRef = useRef();
  const inputAvatar = useInput({inputValue: ''});
  const [isFormNotValid, setIsFormNotValid] = useState(true);

  const inputAvatarClass = `popup__input popup__input_type_avatar
    ${inputAvatar.isError ? 'popup__input_type_error' : ''}`;

  useEffect(() => {
    inputAvatar.reset();
    setIsFormNotValid(true);
  }, [isOpen]);

  useEffect(() => {
    inputAvatar.isError ? setIsFormNotValid(true) : setIsFormNotValid(false);
  }, [inputAvatar.isError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateAvatar(inputAvatarRef.current?.value);
  };

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='update-avatar'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormNotValid={isFormNotValid}
    >
      <>
      <input
        className={inputAvatarClass}
        type='url'
        name='avatar'
        value={inputAvatar.value}
        ref={inputAvatarRef}
        onChange={inputAvatar.onChange}
        id='avatar'
        placeholder='Ссылка на аватарку'
        minLength='2'
        required
      />
      <span
        className='popup__input-error popup__input-error_type_avatar'>
        {inputAvatar.errorMessage}
      </span>
      </>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
