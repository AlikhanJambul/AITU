import cat from '../../image/cat-seven.png'
import paw from '../../image/icons/paw_white.png'
import InnerCat from './Page_components/Inner_cat';
import MapSection from './Page_components/Map_section'

function AboutPage() {
    return (
        <>
            <section className='container-card__section'>
                <img src={cat} alt="cat photo" width="50%" height="396px" />
                <div className='container-card__info'>
                    <p className='container-card__title'>Супер-Люкс</p>
                    <ul className='container-cat-info__list'>
                        <li>
                            <p className='container-cat__cat-info'>Размеры (ШхГхВ) - 180x160x180 см</p>
                        </li>
                        <li>
                            <p className='container-cat__cat-info'>Площадь - 2,88 ь2</p>
                        </li>
                        <li>
                            <p className='container-cat__cat-info-last'>Оснащение номера:</p>
                            <p className='container-cat__things'>2 Лежак</p>
                            <p className='container-cat__things'>3 Домик</p>
                            <p className='container-cat__things'>4 Игровой комплекс - 3 яруса</p>
                            <p className='container-cat__things-last'>5 Когтеточка</p>
                        </li>
                        <li>
                            <p className='container-cat__price'>Цена за сутки: <b>600Р</b></p>
                        </li>
                    </ul>
                        <button className="button button-alternative button__replace">
                            <span className="button__text">Забронировать</span>
                            <img className="button__item" src={paw} alt="paw" width="35px" height="35px" />
                        </button>
                </div>
            </section>
            <InnerCat title="Другие номера" />
            <MapSection />
        </>
    );
}

export default AboutPage