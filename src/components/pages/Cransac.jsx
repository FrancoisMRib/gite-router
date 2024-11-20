import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Cransac() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Les termes de Cransac</h2>
            <button className='push'>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Cransac2.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Les termes de Cransac</h4>
                    {/* <br /> */}
                    <p>
                    Les thermes de Cransac, nichés dans l’Aveyron, sont un lieu unique de bien-être et de détente grâce à leur source de chaleur naturelle exceptionnelle. Connue comme la « ville soufrée », Cransac-les-Thermes exploite les bienfaits de ses émanations gazeuses naturelles, riches en soufre, pour offrir des soins thermaux uniques en France.

Spécialisés dans le traitement des rhumatismes et des affections chroniques, les thermes allient modernité et savoir-faire ancestral. Le cadre apaisant, entre collines verdoyantes et paysages bucoliques, invite à la relaxation et à la revitalisation. Les cures thermales sont complétées par une offre bien-être variée, incluant massages, bains et soins relaxants.

Que ce soit pour une cure de santé ou une pause bien-être, les thermes de Cransac vous promettent une expérience ressourçante, mêlant nature et sérénité.
                    </p>
                    <p>Découvrez-en plus sur le site officiel des termes :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://www.chainethermale.fr/cransac-les-thermes'} className='pusher'>Les termes de Cransac</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}