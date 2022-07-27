import Header from './Header';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (
    <div class="page__content">
      <Header/>
      <Main/>
      <Footer/>
      <div class="popup popup_type_edit-profile">
        <div class="popup__container">
          <button class="popup__button-close" type="button" aria-label="Закрыть"></button>
          <form class="popup__form" name="formEditProfile" action="form" method="post" novalidate>
            <h3 class="popup__title">Редактировать профиль</h3>
            <input class="popup__input popup__input_type_user-name"
                  type="text"
                  name="name"
                  id="user-name"
                  placeholder="Имя"
                  minlength="2"
                  maxlength="40"
                  value="Имя пользователя"
                  required/>
            <span class="popup__input-error popup__input-error_type_user-name"></span>
            <input class="popup__input popup__input_type_user-job"
                  type="text"
                  name="job"
                  id="user-job"
                  placeholder="О себе"
                  minlength="2"
                  maxlength="200"
                  value="Профессия пользователя"
                  required/>
            <span class="popup__input-error popup__input-error_type_user-job"></span>
            <button class="popup__button popup__button_type_submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_add-card">
        <div class="popup__container">
          <button class="popup__button-close" type="button" aria-label="Закрыть"></button>
          <form class="popup__form" name="formAddCard" action="form" method="post" novalidate>
            <h3 class="popup__title">Новое место</h3>
            <input class="popup__input popup__input_type_card-name"
                  type="text"
                  name="card-name"
                  id="card-name"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  required/>
            <span class="popup__input-error popup__input-error_type_card-name"></span>
            <input class="popup__input popup__input_type_card-link"
                  type="url"
                  name="card-link"
                  id="card-link"
                  placeholder="Ссылка на картинку"
                  required/>
            <span class="popup__input-error popup__input-error_type_card-link"></span>
            <button class="popup__button popup__button_type_submit" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_update-avatar">
        <div class="popup__container">
          <button class="popup__button-close" type="button" aria-label="Закрыть"></button>
          <form class="popup__form" name="formUpdateAvatar" action="form" method="post" novalidate>
            <h3 class="popup__title">Обновить аватар</h3>
            <input class="popup__input popup__input_type_avatar"
                  type="url"
                  name="avatar"
                  id="avatar"
                  placeholder="Ссылка на аватарку"
                  minlength="2"
                  required/>
            <span class="popup__input-error popup__input-error_type_avatar"></span>
            <button class="popup__button popup__button_type_submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_view-image">
        <div class="popup__container">
          <button class="popup__button-close" type="button" aria-label="Закрыть"></button>
          <img src="#" alt="фото" class="popup__view-image"/>
          <h3 class="popup__description">Описание</h3>
        </div>
      </div>
      <div class="popup popup_type_confirm">
        <div class="popup__container">
          <button class="popup__button-close" type="button" aria-label="Закрыть"></button>
          <div class="popup__form">
            <h3 class="popup__title popup__title_type_confirm">Вы уверены?</h3>
            <button class="popup__button popup__button_type_confirm" type="button">Да</button>
          </div>
        </div>
      </div>
      <template class="template-card">
        <article class="card">
          <button class="card__button-remove" type="button" aria-label="Удалить"></button>
          <img src="#" class="card__image" alt="Фото"/>
          <div class="card__info">
            <h2 class="card__name"></h2>
            <div class="card__container-like">
              <button class="card__button-like" type="button" aria-label="Лайк"></button>
              <p class="card__count-like"></p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
