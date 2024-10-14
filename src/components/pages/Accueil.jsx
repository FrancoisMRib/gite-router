
// import image1 from "gite-vite/src/img/IMG_20190803_162235.jpg";
import {Header} from '../Header';
import {Footer} from '../Footer';
import './Accueil.css';
import {Slider} from './Slider';
import { Link } from 'react-router-dom';

export function Accueil() {
    return (
        <div>
            <Header/>
            <h2 className="entree">Bienvenue au Gîte la Vigne !</h2>
            <div className='accueil' style={{
                    display:'flex',
                    flex:'row'
                }}>
                    <div className='tourneur'>
                        <Slider/>
                    </div>
            {/* <div>
                <img src="src/components/img/IMG_20190803_162256.jpg" alt="" className='carrousel'/>
                <p>les vignes auxquelles le gîte doit son nom</p>
            </div>
            <div>
                <img src="src/components/img/IMG_20190803_162400.jpg" alt="" className='carrousel'/>
                <p>Les terrasses paysagères</p>
            </div> */}
            <div className='text'>
                <div className='carton'>
                {/* <p>Bienvenue au Gîte la Vigne !</p><br></br> */}
                {/* <p>Nous sommes heureux de vous accueillir au sein de</p>
                <p>notre établissement confortable et authentique. Nous</p>
                <p>espérons que vous passerez un séjour des plus</p>
                <p>agréables et que vous vous sentirez comme chez vous !</p> */}

                <p>Nous sommes heureux de vous accueillir au sein de
                notre établissement confortable et authentique.
                Nous espérons que vous passerez un séjour des plus
                agréables et que vous vous sentirez comme chez vous !</p>
            </div>
            <button className="buttonValid">
                    <Link to={`/reservations`} className='coloring'>Organiser une réservation</Link>
            </button>
            </div>
            </div>
            <Footer/>
        </div>
    );
}