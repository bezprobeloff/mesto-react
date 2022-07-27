const ImagePopup = () => {
  return (
    <div className="popup popup_type_view-image">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        <img src="#" alt="фото" className="popup__view-image"/>
        <h3 className="popup__description">Описание</h3>
      </div>
    </div>
  );
};

export default ImagePopup;
