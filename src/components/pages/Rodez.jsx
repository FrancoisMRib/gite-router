import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';

export function Rodez() {
    return (
        <div>
            <Header/>
            <h2 className='title'>La ville de Rodez</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Rodez.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>La ville de Rodez</h4>
                    <br />
                    <p> Au cœur de la région historique du Rouergue, mais également tourné vers l'avenir avec des merceilleux édifies comme le musée Soulages, la ville de Rodez bla bla bla ... </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}