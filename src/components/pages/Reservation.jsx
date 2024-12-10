import {Header} from '../Header';
import {Footer} from '../Footer';
import { Link } from 'react-router-dom';
import './Reservation.css';
import { ReactTable } from '../Table';

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
                <ReactTable/>
            </div>
            <div className='zonedroite'>
                <p>... et rendez-vous y !</p>
                <img src="src/components/img/Carte-Aveyron.png" alt="" className='ptitcarte'/>
            </div>
           </div>
           <div className='decal'>
            <button className='selection'>
                <Link to={"/livredor"}>Voir les avis de nos anciens clients</Link>
            </button>
            <button className='selection'>
                <Link>Agrandir la carte</Link>
            </button>
           </div>
           <Footer/>
        </div>
    )
}