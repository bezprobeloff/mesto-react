const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div class="popup__container">
        <button class="popup__button-close" type="button" aria-label="Закрыть"></button>
        <form class="popup__form" name={`form-${props.name}`} action="form" method="post" novalidate>
          <h3 class="popup__title">{props.title}</h3>

          <button class="popup__button popup__button_type_submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
