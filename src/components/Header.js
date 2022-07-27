import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header class="header">
      <a href="./index.html" class="header__link">
      <img src={logo} class="header__logo" alt="Лого Mesto"/>
      </a>
    </header>
  );
}

export default Header;
