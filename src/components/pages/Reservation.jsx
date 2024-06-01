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
            <div>
                Planning
            </div>
            <div>
                <img src="src/components/img/Carte-Aveyron.png" alt="" />
            </div>
           </div>
           <div>
            <button>Voir les avis de nos anciens clients</button>
            <button>Agrandir la carte</button>
           </div>
           <Footer/>
        </div>
    )
}