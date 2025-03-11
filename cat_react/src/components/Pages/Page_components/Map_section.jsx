import facebook from '../../../image/icons/facebook.png'
import instagram from '../../../image/icons/instagram.png'
import vk from '../../../image/icons/vk.png'

function HowToFindUs() {
    return (
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
    )
}

export default HowToFindUs