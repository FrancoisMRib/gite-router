import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Decazeville() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Decazeville</h2>
            <button className='push'>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Decazeville.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Decazeville</h4>
                    <br />
                    <p>
                    Decazeville, au cœur de l’Aveyron, est une ville dynamique au riche passé industriel. 
                    Fondée au XIXᵉ siècle autour de l’exploitation du charbon, elle porte le nom du duc Élie Decazes, visionnaire à l’origine de son essor. 
                    Ce patrimoine minier unique est encore visible dans ses paysages et ses musées, notamment le musée de Géologie Pierre-Vetter, qui raconte l’histoire fascinante de la région.
                    Aujourd’hui, Decazeville est un point de rencontre entre héritage industriel et nature préservée. 
                    Ses sentiers offrent des panoramas spectaculaires sur les anciennes mines et la campagne environnante. 
                    La ville est également connue pour son dynamisme culturel, avec des festivals, des événements et des marchés animés.
                    Que vous soyez curieux d’histoire ou amateur de randonnées, Decazeville offre une expérience unique, entre mémoire du passé et énergie tournée vers l’avenir.
                    </p>
                    <p>Découvrez-en plus sur le site officiel de la commune :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://www.decazeville.fr/'} className='pusher'>La ville de Decazeville</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}