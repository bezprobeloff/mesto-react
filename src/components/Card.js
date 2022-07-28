const Card = ({card, onCardClick}) => {
  const handleImageClick = () => {
    onCardClick(card);
  };
  return (
    <article className="card">
      <button className="card__button-remove" type="button" aria-label="Удалить"></button>
      <img src={card.link} onClick={handleImageClick} className="card__image" alt="Фото"/>
      <div className="card__info">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__container-like">
          <button className="card__button-like" type="button" aria-label="Лайк"></button>
          <p className="card__count-like">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
