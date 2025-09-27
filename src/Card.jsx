import Neymarboy from './assets/Neymarboy.jpeg'
import Button from './Button/Button'


function Card(){
    return(
        <div className="card">
            <img className="card-image" src={Neymarboy} alt="Placeholder Image" />
            <h2 className='card-title'>Card Title</h2>
            <p className='card-text'>This is a description of the card content.</p>
            <Button /> 
        </div>
    )
}

export default Card