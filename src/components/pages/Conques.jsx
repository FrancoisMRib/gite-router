import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Conques() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Conques</h2>
            <button className='push'>
                <a href="region" className='pusher'>Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Conques-nuit.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Conques</h4>
                    {/* <br /> */}
                    <p>
                    Conques, joyau de l’Aveyron, est un incontournable des chemins de Saint-Jacques-de-Compostelle. 
                    Au sein de la commune de Conques-en-Rouergue, 
                    ce village médiéval classé parmi les « Plus Beaux Villages de France » charme par ses ruelles pavées, 
                    ses maisons à colombages et son cadre naturel préservé. 
                    L’abbatiale Sainte-Foy, chef-d’œuvre de l’art roman, est célèbre pour son tympan du Jugement dernier et ses vitraux modernes signés Pierre Soulages. 
                    Haut lieu spirituel et artistique, Conques accueille chaque année des milliers de visiteurs, 
                    attirés par son patrimoine exceptionnel et son ambiance hors du temps. 
                    Qu’il s’agisse d’une escapade culturelle, d’un pèlerinage ou d’un moment de sérénité, 
                    Conques offre une expérience unique, entre patrimoine, spiritualité et beauté naturelle.
                    </p>
                    <p>Découvrez-en plus sur le site officiel du village :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://www.tourisme-conques.fr/fr'} className='pusher'>Le village de Conques</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}