import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Bournazel() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Le château de Bournazel</h2>
            <button className='push'>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/bournazel.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Le château de Bournazel</h4>
                    {/* <br /> */}
                    <p> Le château de Bournazel, véritable trésor de la Renaissance française, est une pépite architecturale nichée au cœur de l’Aveyron. 
                        Construit au XVIᵉ siècle, ce joyau allie l’élégance des décors classiques à la richesse d’un patrimoine minutieusement restauré. 
                        Ses façades sculptées, ses jardins à la française et ses intérieurs raffinés témoignent de l’esprit novateur de la Renaissance.
                        Classé monument historique, le château accueille régulièrement des expositions d’art et des événements culturels, plongeant les visiteurs dans l’atmosphère fastueuse d’une époque révolue. 
                        Les jardins, recréés dans le respect des archives historiques, offrent un cadre idyllique pour flâner et contempler la beauté du lieu.
                        Que vous soyez passionné d’histoire, amateur d’art ou simplement à la recherche d’une escapade culturelle, le château de Bournazel promet une immersion inoubliable dans l’élégance et le raffinement de la Renaissance.
                       
                    </p>
                    <p>Découvrez-en plus sur le site officiel du château :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://www.chateau-bournazel.fr/'} className='pusher'>Le château de Bournazel</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}