import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';

export function Flagnac() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Le festival de Flagnac</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Flagnac.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Le festival de Flagnac</h4>
                    <br />
                    <p>Venez découvrir le féérique festival de Flagnac !</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}