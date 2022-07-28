const ImagePopup = (props) => {
  const classPopupOpened = `${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={`popup popup_type_view-image ${classPopupOpened}`}>
      <div className="popup__container">
        <button className="popup__button-close" onClick={props.onClose} type="button" aria-label="Закрыть"></button>
        <img src={props.card.link} alt={props.card.name} className="popup__view-image"/>
        <h3 className="popup__description">{props.card.name}</h3>
      </div>
    </div>
  );
};

export default ImagePopup;
