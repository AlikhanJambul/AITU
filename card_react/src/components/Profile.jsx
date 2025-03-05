import '../reset.css'
import './Profile.css'


function Profile() {
    const infoPerson = {
        firstName: "Алихан",
        lastName: "Джамбул",
        email: "jambul9827@gmail.com",
        age: 17,
        hobbies: ["Домбра", "Гитара", "Баскетбол", "Волейбол"]
    }

    return (
    
        <div>
            <div className='card__replace'>
                <div className="card">
                    <article className='card__main'>
                        <h1 className="card__name">{infoPerson.firstName + " " + infoPerson.lastName}</h1>
                        <p className="card__email">Почта: {infoPerson.email}</p>
                        <p className="card__age">Возраст: {infoPerson.age}</p>
                        {infoPerson.age < 18 && <p>Несовершеннолетний</p>} 
                        <p>Хобби:</p>
                        <ul className='card__hobbies'>
                            {infoPerson.hobbies.map((hobby) => (
                                <li className='hobbies__item' key={hobby}>{hobby}</li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
            <p className='secret'>
                    Хватит пожалуйста!
            </p>
        </div>
    )

}

export default Profile
