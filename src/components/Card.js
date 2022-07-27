const Card = (props) => {
  const handleClick = () => {
    props.onCardClick(props.card);
  };
  return (
    <article className="card">
      <button className="card__button-remove" type="button" aria-label="Удалить"></button>
      <img src={props.card.link} className="card__image" alt="Фото"/>
      <div className="card__info">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__container-like">
          <button className="card__button-like" type="button" aria-label="Лайк"></button>
          <p className="card__count-like">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
