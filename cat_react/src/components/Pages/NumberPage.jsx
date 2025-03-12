import catOne from '../../image/cat-one.png'
import catTwo from '../../image/cat-two.png'
import catThree from '../../image/cat-three.png'
import catFour from '../../image/cat-four.png'
import catFive from '../../image/cat-five.png'
import catSix from '../../image/cat-six.png'
import CardNumber from '../Pages/Page_components/Card_number'
import catBg from '../../image/cat-banner.png'

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
        <section className='card2'>
            <p className='card2__title'>Наши номера</p>
            <ul className='card-cat'>
                {catInfo.map((info) => (
                    <li>
                        <CardNumber title={info.title} catPhoto={info.catPhoto} size={info.size} plosh={info.plosh} osnNum={info.osnNum} price={info.price} />
                    </li>
                ))}
            </ul>

            <div className='container-cat'>
                <img src={catBg} alt="bg cat" />
            </div>
        </section>
    );
}

export default NumberPage