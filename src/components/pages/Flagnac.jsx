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
                <a href="region" className='pusher'>Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Flagnac-2.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Le festival de Flagnac</h4>
                    {/* <br /> */}
                    <p>
                    <b>« Hier, un village »</b> est un spectacle son et lumière qui retrace depuis plus de 40 ans la vie d’un village rouergat dans les années 1920/1930, avant que le monde ne bascule dans le monde moderne.

Les 250 figurants, à travers différents tableaux redonnent vie à ce bourg et à ses habitants. Les effets de lumière, la musique et la mise en mouvement de décors transportent le spectateur dans cette époque révolue lorsque la vie était rythmée par les saisons et le travail de la terre.  

Hier, un village est une véritable œuvre d’art populaire. Ce spectacle est tout public, les représentations se déroulent 7 soirs d’été dans le site de La Garrigal qui peut accueillir 3000 personnes.

La réservation n’est pas obligatoire mais conseillée.
                    </p>
                    {/* <p>Venez découvrir le féérique festival de Flagnac !</p>
                    <p>Il s'agit d'une expérience inoubliable qui fait revivre l’histoire et les traditions du monde rural. Chaque été, ce spectacle son et lumière grandiose attire des milliers de spectateurs dans un décor naturel enchanteur.

Porté par plus de 400 bénévoles passionnés, ce festival retrace la vie d’un village au fil des saisons, mêlant scènes théâtrales, projections monumentales, musique et feux d’artifice. Le tout dans une ambiance conviviale qui met à l’honneur le patrimoine et les racines de la région.

Que vous soyez amateur d’histoire ou à la recherche d’une soirée magique sous les étoiles, le festival de Flagnac est un rendez-vous incontournable pour plonger dans l’âme de l’Aveyron.</p> */}
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