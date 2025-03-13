import catOne from '../../image/cat-one.png'
import catTwo from '../../image/cat-two.png'
import catThree from '../../image/cat-three.png'
import catFour from '../../image/cat-four.png'
import catFive from '../../image/cat-five.png'
import catSix from '../../image/cat-six.png'
import CardNumber from '../Pages/Page_components/Card_number'
import catBg from '../../image/cat-banner.png'
import paw from '../../image/image.png'
import MapSection from './Page_components/Map_section'

function NumberPage() {
    const catInfo = [
        {
            title: "Эконом",
            catPhoto: catOne,
            size: "90х70х180 см",
            plosh: "0,63 м2",
            osnNum: "1",
            price: "100 P"
        },
        {
            title: "Эконом плюс",
            catPhoto: catTwo,
            size: "90х100х180 см",
            plosh: "0,90 м2",
            osnNum: "2, 3",
            price: "200 P"
        },
        {
            title: "Комфорт",
            catPhoto: catThree,
            size: "100х125х180 см",
            plosh: "1,13 м2",
            osnNum: "2, 3, 4",
            price: "250 P"
        },
        {
            title: "Супер-Люкс",
            catPhoto: catFour,
            size: "180х160х180 см",
            plosh: "2,88 м2",
            osnNum: "2, 3, 4, 5",
            price: "600 P"
        },
        {
            title: "Сьют",
            catPhoto: catFive,
            size: "125х125х180 см",
            plosh: "1,56 м2",
            osnNum: "2, 3, 4",
            price: "350 P"
        },
        {
            title: "Люкс",
            catPhoto: catSix,
            size: "160х160х180 см",
            plosh: "2,56 м2",
            osnNum: "2, 3, 4, 5",
            price: "500 P"
        },
        {
            title: "Эконом",
            catPhoto: catOne,
            size: "90х70х180 см",
            plosh: "0,63 м2",
            osnNum: "1",
            price: "100 P"
        },
        {
            title: "Эконом плюс",
            catPhoto: catTwo,
            size: "90х100х180 см",
            plosh: "0,90 м2",
            osnNum: "2, 3",
            price: "200 P"
        },
    ]


    return (
        <>
            <section className='card2'>
                <p className='card2__title'>Наши номера</p>
                <ul className='card-cat'>
                    {catInfo.map((info) => (
                        <li>
                            <CardNumber title={info.title} catPhoto={info.catPhoto} size={info.size} plosh={info.plosh} osnNum={info.osnNum} price={info.price} />
                        </li>
                    ))}
                </ul>
            </section>

            <section className='container-cat'>
            <img src={catBg} alt="bg cat" />
            <ul className='container-cat__list'>
                <li>
                    <p className='cat-list__pre-title'>Каждый 7-й день</p>
                    <p className='cat-list__title'>бесплатно!</p>
                </li>
                <li>
                    <p>Акция действует при размещении</p>
                    <p className='cat-list__desc'>в номерах "Люкс" и "Супер-Люкс"</p>
                </li>
                <li>
                    <button className="button">
                        <span className="button__text">Забронировать</span>
                        <img className="button__item" src={paw} alt="paw" width="35px" height="35px" />
                    </button>
                </li>
            </ul>
            </section>
            
            <MapSection />
        </>
    );
}

export default NumberPage