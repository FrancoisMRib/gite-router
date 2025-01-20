import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Rocamadour() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Rocamadour</h2>
            <button className='push'>
                <a href="region" className='pusher'>Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Rocamadour.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Rocamadour</h4>
                    {/* <br /> */}
                    <p>
                    Rocamadour, village emblématique du Lot, est une véritable merveille suspendue entre ciel et terre. Accroché à une falaise vertigineuse, ce haut lieu de pèlerinage millénaire fascine par sa beauté et sa spiritualité.

La cité médiévale abrite des sanctuaires renommés, dont la célèbre chapelle Notre-Dame et sa statue de la Vierge Noire, qui attirent pèlerins et visiteurs du monde entier. La montée des 216 marches du Grand Escalier, bordée d’une architecture séculaire, offre une expérience inoubliable.

Entouré du parc naturel des Causses du Quercy, Rocamadour est également une destination idéale pour les amoureux de nature et de gastronomie, avec ses produits locaux comme le fromage de chèvre AOP. Ce village hors du commun est une étape incontournable pour qui veut découvrir l’authenticité et la magie du sud-ouest.


                    </p>
                    <p>Découvrez-en plus sur le site officiel de Rocamadour :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://mairierocamadour.fr/'} className='pusher'>La ville de Rocamadour</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}