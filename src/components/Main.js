import avatar from '../images/avatar.jpg';

const Main = () => {
  return (
    <main class="content">
      <section class="profile" aria-label="Профиль пользователя">
        <div class="profile__avatar-container">
          <img src={avatar} alt="Аватар пользователя" class="profile__avatar-image"/>
        </div>
        <div class="profile__info">
          <div class="profile__container-name">
            <h1 class="profile__name">User</h1>
            <button class="profile__button-edit" type="button" aria-label="Редактировать"></button>
          </div>
          <p class="profile__job">About</p>
        </div>
        <button class="profile__button-add" type="button" aria-label="Добавить"></button>
      </section>
      <section class="cards" aria-label="Фотокарточки"></section>
    </main>
  );
}

export default Main;
