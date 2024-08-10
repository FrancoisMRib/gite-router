import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';

export function Conques() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Conques</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Conques-nuit.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Conques</h4>
                    <br />
                    <p>Conques, bla bla bla ... </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}