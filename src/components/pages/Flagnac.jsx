import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Flagnac() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Le festival de Flagnac</h2>
            <button className='push'>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Flagnac.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Le festival de Flagnac</h4>
                    {/* <br /> */}
                    <p>Venez découvrir le féérique festival de Flagnac !</p>
                    <p>Il s'agit d'une expérience inoubliable qui fait revivre l’histoire et les traditions du monde rural. Chaque été, ce spectacle son et lumière grandiose attire des milliers de spectateurs dans un décor naturel enchanteur.

Porté par plus de 400 bénévoles passionnés, ce festival retrace la vie d’un village au fil des saisons, mêlant scènes théâtrales, projections monumentales, musique et feux d’artifice. Le tout dans une ambiance conviviale qui met à l’honneur le patrimoine et les racines de la région.

Que vous soyez amateur d’histoire ou à la recherche d’une soirée magique sous les étoiles, le festival de Flagnac est un rendez-vous incontournable pour plonger dans l’âme de l’Aveyron.</p>
                <p>Découvrez-en plus sur le site officiel du festival :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://www.hierunvillage.com/fr/'} className='pusher'>Le festival de Flagnac</Link>
                        </button>
                    </div>
                    </div>
                
            </div>
            <Footer/>
        </div>
    )
}