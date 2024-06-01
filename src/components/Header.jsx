import { Link } from "react-router-dom";

import HeaderImg from './img/header-image2.png' ;
import './Header.css';

export function Header() {
    return (
        <div className="Header">
            <img src={HeaderImg} alt='HeaderImg' className="photo"/>
        
                <div id="HeaderMenu" className="HeaderContain">
                  <Link to={`/`} className="écrit">Accueil</Link>
                  <Link to={`/gite`}>Découvrir le gîte</Link>
                  <Link to={`/region`}>Découvrir la région</Link>
                  <Link to={`/reservations`}>Réservations</Link>
                  <Link to={`/contact`}>Contact</Link>
              
                </div>

            
        </div>

    );
}