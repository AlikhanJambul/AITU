import './Product_card.css'
import '../../reset.css'

function ProductCard({name, price, description, isAvailable}) {
    let cardClass
    let cardName = "card__name"
    cardClass = isAvailable ? "card__create--available" : "card__create--not-available"
    cardName = isAvailable ? "card__name--active" : "card__name--inactive"


    return (
        <>
            <div className={cardClass}>
                <article className="card">
                    <h1 className={cardName}>{name}</h1>
                    <div className='card__replace'>
                            <p className="card__description">{description}</p>
                    </div>
                    <p className="card__price">{price}</p>
                </article>
            </div>
        </>
    )
}

export default ProductCard;