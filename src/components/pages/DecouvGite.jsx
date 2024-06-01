import {Header} from '../Header';
import {Footer} from '../Footer';
import './DecouvGite.css';
import { Slider2 } from './Slider2';

export function DecouvGite () {
    return (
        <div className='general'>
            <Header/>
            <h2 className='title'>Le gîte que nous vous proposons</h2>
            <div className='accueil' style={{
            display:'flex',
            flex:'row'
        }}>
                <Slider2 />
             
            <div className='corpus'>
                <div className='presentation'>
                <p>A Firmi, en bordure du bourg, nous vous accueillerons
                dans une maison indépendante sur deux niveaux, 
                proche de la résidence secondaire du propriétaire.</p>
                <p>36 marchant longeant un jardin paysager vous mèneront
                au gîte depuis le parking.</p>
                <p>A la belle saison, vous aurez le plaisir de profiter des deux 
                terrasses ouvertes (16m² et 32m²) et d’un mobilier de jardin.</p>

                </div>
        <h3>
        Equipement général : 
        </h3>
        <p>Fourni :</p>
        {/* <p className='list'> */}
            <p>

Chauffage central au gaz<br></br>
Electricité<br></br>
Lave-vaisselle<br></br>
Linge de maison<br></br>
Equipement bébé<br></br>
Accès internet<br></br>
        </p>

        <p>

        </p>
            <button className='button'>Découvrir les avis de nos anciens vacanciers</button>
            <br>
            </br>
            <button className='button'>Découvrez comment rejoindre le gîte</button>
            </div>
            </div>
            <Footer/>
        </div>
        
    )
    
}