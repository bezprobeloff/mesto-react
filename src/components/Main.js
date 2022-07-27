import avatar from '../images/avatar.jpg';

const Main = () => {
  const handleEditAvatarClick = () => {
    const popup = document.querySelector('.popup_type_update-avatar');
    popup.classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    const popup = document.querySelector('.popup_type_edit-profile');
    popup.classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    const popup = document.querySelector('.popup_type_add-card');
    popup.classList.add('popup_opened');
  };

  return (
    <main class="content">
      <section class="profile" aria-label="Профиль пользователя">
        <div class="profile__avatar-container"  onClick={handleEditAvatarClick}>
          <img src={avatar} alt="Аватар пользователя" class="profile__avatar-image"/>
        </div>
        <div class="profile__info">
          <div class="profile__container-name">
            <h1 class="profile__name">User</h1>
            <button class="profile__button-edit" type="button" onClick={handleEditProfileClick} aria-label="Редактировать"></button>
          </div>
          <p class="profile__job">About</p>
        </div>
        <button class="profile__button-add" type="button" onClick={handleAddPlaceClick} aria-label="Добавить"></button>
      </section>
      <section class="cards" aria-label="Фотокарточки"></section>
    </main>
  );
}

export default Main;
