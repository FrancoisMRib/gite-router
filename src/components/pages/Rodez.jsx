import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';
import { Link } from 'react-router-dom';

export function Rodez() {
    return (
        <div>
            <Header/>
            <h2 className='title'>La ville de Rodez</h2>
            <button className='push'>
                <a href="region" className='pusher'>Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Rodez.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>La ville de Rodez</h4>
                    {/* <br /> */}
                    <p> Au cœur de la région historique du Rouergue, mais également tourné vers l'avenir avec des merceilleux édifies comme le musée Soulages,</p>
                    <p>
                    Rodez, capitale de l’Aveyron, séduit par son patrimoine historique et son dynamisme culturel. Dominée par la majestueuse cathédrale Notre-Dame, chef-d’œuvre gothique en grès rose, la ville offre une plongée dans l’histoire à travers ses ruelles médiévales et ses maisons à colombages.

Rodez est également une destination culturelle incontournable grâce au musée Soulages, dédié au maître de l’art abstrait Pierre Soulages, natif de la région. Les amateurs d’art et d’histoire apprécieront aussi le musée Fenaille et ses célèbres statues-menhirs, témoins uniques du Néolithique.

Entre marchés gourmands, animations locales et panorama sur la vallée de l’Aveyron, Rodez est une ville où il fait bon flâner, découvrir et s’imprégner de l’âme du Rouergue.


                    </p>
                    <p>Découvrez-en plus sur le site officiel de Rodez :</p>
                    <div className='metteur'>
                        <button className='pushed'>
                            <Link to={'https://www.ville-rodez.fr/'} className='pusher'>La cité de Rodez</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}