import paw from '../../image/image.png'
import tempreture from '../../image/icons/tempreture.png'
import camera from '../../image/icons/camera.png'
import car from '../../image/icons/car.png'
import fish from '../../image/icons/fish.png'
import cat from '../../image/icons/cat.png'
import hand from '../../image/icons/hand.png'
import catTwo from '../../image/image1.png'
import pawTwo from '../../image/icons/paw_white.png'
import facebook from '../../image/icons/facebook.png'
import instagram from '../../image/icons/instagram.png'
import vk from '../../image/icons/vk.png'



function HomePage() {
    return (
        <>
            <section className="poster poster-first-child">
                <div className="poster__intro">
                    <p className="poster__text">Санкт-Петербург</p>
                    <h1 className="poster__title bold-font">Котейка</h1>
                    <h4 className="poster__subtitle">Уютная гостиница для котов и кошек</h4>
                    <div className="button_place">
                        <button className="button">
                            <span className="button__text">Забронировать</span>
                            <img className="button__item" src={paw} alt="paw" width="35px" height="35px" />
                        </button>
                    </div>
                </div>
            </section>
            <section id="why-us" className="section section--column">
                <h2 className="poster__title bold-font">Почему мы?</h2>
                <div className="section__container">
                    <ul className="list">
                        <li className="list__item">
                            <article className="card">
                                <img className="card__image" src={tempreture} alt="tempreture" />
                                <p className="card__title bold-font">Комфортная температура</p>
                                <span className="card__description">Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номереможно дополнительно отрегулировать температуру.</span>
                            </article>
                        </li>
                        <li className="list__item">
                            <article className="card">
                                <img className="card__image" src={camera} alt="camera" />
                                <p className="card__title bold-font">Видеонаблюдение</p>
                                <span className="card__description">Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со своего смартфона или компьютера.</span>
                            </article>
                        </li>
                        <li className="list__item">
                            <article className="card">
                                <img className="card__image" src={car} alt="car" />
                                <p className="card__title bold-font">Услуги Зоотакси</p>
                                <span className="card__description">Мы приедем за вашим питомцем в любой район Санкт-Петербурга.</span>
                            </article>
                        </li>
                        <li className="list__item">
                            <article className="card">
                                <img className="card__image" src={fish} alt="fish" />
                                <p className="card__title bold-font">Сбалансированное питание</p>
                                <span className="card__description">Вы можете привезти свой кормили доверить рацион своего питомца нашим профессионалам.</span>
                            </article>
                        </li>
                        <li className="list__item">
                            <article className="card">
                                <img className="card__image" src={cat} alt="cat" />
                                <p className="card__title bold-font">Ежедневные прогулки</p>
                                <span className="card__description">По вашему желанию мы выгуливаем вашего питомца два раза в день на специализированной закрытой территории.</span>
                            </article>
                        </li>
                        <li className="list__item">
                            <article className="card">
                                <img className="card__image" src={hand} alt="hand" />
                                <p className="card__title bold-font">Лучшие ветеринары</p>
                                <span className="card__description">В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.</span>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="container" id="numbers">
                <h3 className="container__title">Номера</h3>
                <div className="container__content">
                    <img className="container__img" src={catTwo} alt="cat" />
                    <div className="container__apartment">
                        <h5 className="container__apartment--title">Эконом плюс</h5>
                        <ul className="list--info">
                            <li><span className="bullet"></span> <strong>Площадь</strong> — 0,90 м²</li>
                            <li><span className="bullet"></span> <strong>Размеры (Ш×Г×В)</strong> — 90×100×180 см</li>
                            <li><span className="bullet"></span> <strong>Цена за сутки</strong>: 200₽</li>
                        </ul>                    
                        <button className="button">
                            <span className="button__text">Забронировать</span>
                            <img className="button__item" src={pawTwo} alt="paw" width="35px" height="35px" />
                        </button>
                    </div>
                </div>
            </section>
            <section className="section" id="reviews">
                <h6 className="section__title">Отзывы</h6>
                <ul className="list reviews__list">
                    <li className="list__item">
                        <article className="card">
                            <span className="card__description">Первый раз пришлось оставить нашего котика
                                в гостинице, очень переживали. Администратор Мария каждый день высылала нам фото нашего питомца, рассказывала, как он себя чувствует.
                                И мы и котик остались очень довольны!
                            </span>
                            <div className="reviews_author">
                                <p>Валерия Гришаева</p>
                                <p>15 ноября, 2019</p>
                            </div>
                        </article>
                    </li>
                    <li className="list__item">
                        <article className="card">
                            <span className="card__description">Гостиницу для питомцев нам посоветовали друзья. Они всегда оставляют здесь своего кота, когда уезжают. В “Котейке” очень хорошо заботятся о питомцах, в гостинице очень чисто. Всем рекомендую! Будем обращаться еще.</span>
                            <div className="reviews_author">
                                <p>Екатерина Минаева</p>
                                <p>10 октября, 2019</p>
                            </div>
                        </article>
                    </li>
                    <li className="list__item">
                        <article className="card">
                            <span className="card__description">Мой кот — настоящая привереда, угодить ему сложно. У меня были особые требования к уходу за ним, и “Котейка” отлично справились. Я часто наблюдал по видео за питомцем со своего телефона, это очень удобно. </span>
                            <div className="reviews_author">
                                <p>Павел Нечаев</p>
                                <p>13 сентября, 2007</p>
                            </div>
                        </article>
                    </li>
                </ul>
            </section>
            <section className="poster poster-container" id="how-to-find-us">
                <div className="poster__intro-last">
                    <p className="poster__title-last bold-font">Как нас найти</p>
                    <ul className="info">
                        <li className="info__item">
                            <p className="info__title">Адрес</p>
                            <p className="info__description">Санкт-Петербург,</p>
                            <br />
                            <p className="info__description">ул Большая Конюшенная, д 19</p>
                        </li>
                        <li className="info__item">
                            <p className="info__title">Режим работы</p>
                            <p className="info__description">Ежедневно, с 9:00 до 20:00</p>
                        </li>
                        <li className="info__item">
                            <p className="info__title">Телефон</p>
                            <p className="info__description">8 (800) 333-55-99</p>
                        </li>
                        <li className="info__item">
                            <p className="info__title">E-mail</p>
                            <p className="info__description">info@cat-hotel.ru</p>
                        </li>
                        <li className="info__item">
                            <p className="info__title">Социальные сети</p>
                            <div className="info__social-media">
                                <img src={facebook} alt="facebook" />
                                <img src={instagram} alt="instagram" />
                                <img src={vk} alt="vk" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="poster__map">
                    <iframe src="https://yandex.kz/map-widget/v1/-/CHqBeAPC" />
                </div>
            </section>
        </>     
    );
}


export default HomePage

