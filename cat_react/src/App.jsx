import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './image/logo.png'
import elemMobNav from './image/mobile_image/for_header.png' 
import HomePage from './components/Pages/HomePage'
import AboutPage from './components/Pages/AboutPage'
import NumberPage from './components/Pages/NumberPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <img src={logo} alt="logo" />
        <nav className="navbar">
          <Link className='navbar__item' to='/'>Главная</Link>
          <Link className='navbar__item' to='/about'>Каталог</Link>
          <Link className='navbar__item' to='/number/:numberId'>Номера</Link>
          <img src={elemMobNav} alt="button_for_mobile_header" />
        </nav>
    </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<NumberPage />} />
        <Route path='/number/:numberId' element={<AboutPage />} />
      </Routes>

      <footer class="footer">
        <div class="header">
            <img src={logo} alt="logo" />
            <nav class="navbar">
                <a class="navbar__item" href="#why-us">Почему мы?</a>
                <a class="navbar__item" href="#numbers">Номера</a>
                <a class="navbar__item" href="#reviews">Отзывы</a>
                <a class="navbar__item" href="#how-to-find-us">Как нас найти</a>
            </nav>
        </div>
        <hr />
        <div class="footer__info">
            <p>2019 Все права защищены</p>
            <p>Политика конфиденциальности</p>
        </div>
    </footer>

    </BrowserRouter>
  );
}

export default App
