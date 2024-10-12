import { Link } from "react-router-dom";

import HeaderImg from './img/header-image2.png' ;
import './Header.css';

export function Header() {
    return (
        <div className="Header">
            <img src={HeaderImg} alt='HeaderImg' className="robert"/>
        
                <div className="HeaderContain">
                    {/* <a href="/" className="écrits">Accueil</a>
                    <a href="/gite">Découvrir le gîte</a>
                    <a href="/region">Découvrir la région</a>
                    <a href="/reservations">Réservations</a>
                    <a href="/contact">Contact</a> */}
                  <Link to={`/`} className="écrits">Accueil</Link>
                  <Link to={`/gite`} className="écrits">Découvrir le gîte</Link>
                  <Link to={`/region`} className="écrits">Découvrir la région</Link>
                  <Link to={`/reservations`} className="écrits">Réservations</Link>
                  <Link to={`/contact`} className="écrits">Contact</Link>
              
                </div>

            
        </div>

    );
}