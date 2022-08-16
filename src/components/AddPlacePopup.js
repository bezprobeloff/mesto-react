import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useInput from '../pages/hooks/useInput';

const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {
  const inputName = useInput({inputValue: ''});
  const inputLink = useInput({inputValue: ''});
  const inputNameClass = `popup__input popup__input_type_card-name
    ${inputName.isError ? 'popup__input_type_error' : ''}`;
  const inputLinkClass = `popup__input popup__input_type_card-link
    ${inputLink.isError ? 'popup__input_type_error' : ''}`;


  const handleSubmit = (evt) => {
    evt.preventDefault();

    onAddPlace({name: inputName.value, link: inputLink.value});
  };

  useEffect(() => {
    inputName.reset();
    inputLink.reset();
  }, [isOpen]);

  return (
    <PopupWithForm
      title='Новое место'
      name='add-card'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isNotFormValid={inputName.isError || inputLink.isError}
    >
      <>
      <input className={inputNameClass}
        value={inputName.value ?? ''}
        onChange={inputName.onChange}
        type='text'
        name='card-name'
        id='card-name'
        placeholder='Название'
        minLength='2'
        maxLength='30' required
      />
      <span
        className='popup__input-error popup__input-error_type_card-name'>
        {inputName.errorMessage}
      </span>
      <input
        className={inputLinkClass}
        value={inputLink.value ?? ''}
        onChange={inputLink.onChange}
        type='url'
        name='card-link'
        id='card-link'
        placeholder='Ссылка на картинку'
        required
      />
      <span
        className='popup__input-error popup__input-error_type_card-link'>
        {inputLink.errorMessage}
      </span>
      </>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
