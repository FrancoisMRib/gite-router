import {Header} from '../Header';
import {Footer} from '../Footer';
import './Reservation.css';

export function Reservation() {
    return (
        <div>
            <Header/>
           <div className='title'>
            <h2>Réservations</h2>
            <h4>Découvrez nos disponibilités et préparez votre séjour</h4>
           </div>
           <div className='panel'>
            <div className='zonegauche'>
                <p>Réservez en fonction des disponibilités du gîte...</p>
            </div>
            <div className='zonedroite'>
                <p>... et rendez-vous y !</p>
                <img src="src/components/img/Carte-Aveyron.png" alt="" className='ptitcarte'/>
            </div>
           </div>
           <div className='decal'>
            <button className='selection'>Voir les avis de nos anciens clients</button>
            <button className='selection'>Agrandir la carte</button>
           </div>
           <Footer/>
        </div>
    )
}