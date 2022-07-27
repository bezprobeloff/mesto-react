const ImagePopup = () => {
  return (
    <div class="popup popup_type_view-image">
      <div class="popup__container">
        <button class="popup__button-close" type="button" aria-label="Закрыть"></button>
        <img src="#" alt="фото" class="popup__view-image"/>
        <h3 class="popup__description">Описание</h3>
      </div>
    </div>
  );
};

export default ImagePopup;
