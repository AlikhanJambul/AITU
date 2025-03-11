import paw from '../../../image/icons/paw_white.png'

function CardNumber({ catPhoto, size, plosh, price }) {
    return (
        <>
            <img className='card-cat__img' src={catPhoto} alt="cat-one" />
            <p className='card-cat__title'><b>Эконом</b></p>
            <ul className='card-cat__list'>
                <li>
                    <p className='card-cat__size'>Размеры (ШхГхВ) - {size}</p>
                </li>
                <li>
                    <p className='card-cat__plos'>Площадь - {plosh}</p>
                </li>
                <li>
                    <p className='card-cat__price'>Цена за сутки: <b>{price}</b></p>
                </li>
            </ul>
            <div className='button-alternative__replace'>
                <button className="button button-alternative button-alternative__none-margin">
                    <span className="button__text">Забронировать</span>
                    <img className="button__item" src={paw} alt="paw" width="35px" height="35px" />
                </button>
            </div>
        </>
    )
}