import React from 'react';

const ImagePopup = ({ card, isOpen, onClose }) => {
  const classPopupOpened = `${isOpen ? 'popup_opened' : ''}`;

  return (
    <div
      className={`popup popup_type_view-image ${classPopupOpened}`}
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}
    >
      <div className='popup__container'>
        <button
          className='popup__button-close'
          onClick={onClose}
          type='button'
          aria-label='Закрыть'
        ></button>
        <img src={card.link} alt={card.name} className='popup__view-image' />
        <h3 className='popup__description'>{card.name}</h3>
      </div>
    </div>
  );
};

export default ImagePopup;
