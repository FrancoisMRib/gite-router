import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';

export function Rocamadour() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Rocamadour</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Rocamadour.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Rocamadour</h4>
                    <br />
                    <p>Rocamadour, bla bla bla ... </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}