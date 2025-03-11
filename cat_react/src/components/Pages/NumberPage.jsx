import catOne from '../../image/cat-one.png'
import paw from '../../image/icons/paw_white.png'

function NumberPage() {
    const catInfo = [
        {
            catPhoto: catOne,
            size: "90х70х180 см",
            plosh: "0,63 м2",
            price: "100 P"
        }
    ]


    return (
        <section className='card2'>
            <div className='card-cat'>
                <img className='card-cat__img' src={catOne} alt="cat-one" />
                <p className='card-cat__title'><b>Эконом</b></p>
                <ul className='card-cat__list'>
                    <li>
                        <p className='card-cat__size'>Размеры (ШхГхВ) - 90х70х180 см</p>
                    </li>
                    <li>
                        <p className='card-cat__plos'>Площадь - 0,63 м2</p>
                    </li>
                    <li>
                        <p className='card-cat__price'>Цена за сутки: <b>100 Р</b></p>
                    </li>
                </ul>
                <div className='button-alternative__replace'>
                    <button className="button button-alternative button-alternative__none-margin">
                        <span className="button__text">Забронировать</span>
                        <img className="button__item" src={paw} alt="paw" width="35px" height="35px" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NumberPage