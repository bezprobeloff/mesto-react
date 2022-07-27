const PopupWithForm = (props) => {

  const classPopupOpened = `${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={`popup popup_type_${props.name} ${classPopupOpened}`}>
      <div className="popup__container">
        <button className="popup__button-close" onClick={props.onClose} type="button" aria-label="Закрыть"></button>
        <form className="popup__form" name={`form-${props.name}`} action="form" method="post" novalidate>
          <h3 className="popup__title">{props.title}</h3>

          <button className="popup__button popup__button_type_submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
