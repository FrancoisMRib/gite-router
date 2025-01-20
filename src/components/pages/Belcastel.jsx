import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Belcastel() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Le village de Belcastel</h2>
            <button className='push'>
                <a href="region" className='pusher'>Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Belcastel.png" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Le village de Belcastel</h4>
                    {/* <br /> */}
                    <p> Bienvenue à Belcastel, l’un des plus beaux villages de France, est un joyau médiéval niché dans la vallée de l’Aveyron. 
                        Avec ses maisons en pierre aux toits de lauze, son majestueux château du IXᵉ siècle et son pont médiéval qui enjambe la rivière Aveyron, le village offre un véritable voyage dans le temps. 
                        Restauré avec passion par l’architecte Fernand Pouillon dans les années 1970, Belcastel séduit par son charme authentique et son ambiance paisible.
                        Les visiteurs peuvent explorer le château, admirer des expositions d’art ou simplement flâner dans ses ruelles fleuries. 
                        Le village est aussi un lieu très apprécié des gourmets grâce à ses restaurants mettant en valeur les spécialités de l’Aveyron, comme le roquefort.
                        Idéal pour une escapade romantique ou une pause culturelle, Belcastel est une invitation à se poser et à profiter de la beauté d’un patrimoine préservé au cœur d’une nature généreuse. 
                    </p>
                    <p>Découvrez-en plus sur le site officiel de la commune :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://www.mairie-belcastel.fr/'} className='pusher'>Le village de Belcastel</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}