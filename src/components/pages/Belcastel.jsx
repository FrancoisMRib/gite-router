import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';

export function Belcastel() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Le village de Belcastel</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Belcastel.png" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Le village de Belcastel</h4>
                    <br />
                    <p>Connu pour son inoubliable cuisine locale, le village de Belcastel, bla bla bla ... </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}