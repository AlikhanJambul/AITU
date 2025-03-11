import catTwo from '../../../image/image1.png'
import pawTwo from '../../../image/icons/paw_white.png'

function InnerCat({ title }) {
    return (
        <section className="container" id="numbers">
        <h3 className="container__title">{title}</h3>
        <div className="container__content">
            <img className="container__img" src={catTwo} alt="cat" />
            <div className="container__apartment">
                <h5 className="container__apartment--title">Эконом плюс</h5>
                <ul className="list--info">
                    <li><span className="bullet"></span> <strong>Площадь</strong> — 0,90 м²</li>
                    <li><span className="bullet"></span> <strong>Размеры (Ш×Г×В)</strong> — 90×100×180 см</li>
                    <li><span className="bullet"></span> <strong>Цена за сутки</strong>: 200₽</li>
                </ul>                    
                <button className="button button-alternative">
                    <span className="button__text">Забронировать</span>
                    <img className="button__item" src={pawTwo} alt="paw" width="35px" height="35px" />
                </button>
            </div>
        </div>
    </section>
    )
}


export default InnerCat