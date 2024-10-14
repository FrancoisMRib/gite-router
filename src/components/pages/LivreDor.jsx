import {Header} from '../Header';
import {Footer} from '../Footer';
import './LivreDor.css';

export function LivreDor() {
    return (
        <div>        
            <Header/>
            <h2>Les avis de nos anciens pensionnaires</h2>
            <img src="src/components/img/couverture.png" alt="Notre livre d'Or" className="livre"/>
            <div className='cartounet'>
                <p>Séjour du 24 août au 14 sept 2021 <br /> Nous avons apprécié cette maison calme, très fleurie, où il <br/> ne manque rien. De plus <br/> nous avons eu un temps extraordinairement beau. <br/> Beaucoup de visites dans les environs immédiats et même <br/> plus loin (LOT, CANTAL) <br/> Un bon souvenir !!!</p>
                <p>Martine et Gilles (Hautes-Alpes)</p>
            </div>

            <div className='cartounet'>
                <p>Séjour du 15 au 29 septembre 2022</p>
                <p>Maison d'une propreté irréprochable où l'on se sent très bien. <br/> Nous avons eu du beau temps surtout la 1re semaine. <br/> Pas mal de visites dont quelques-unes un peu loin et dans les lacets. <br/> Merci Myriam pour votre sympathie et pour les petites attentions. <br/> Bonne continuation à vous.</p>
                <p>Annick, Jean-Claude, Odile et Jean Michel (Calvados)</p>
            </div>

            <div className='cartounet'>
                <p>Du 18 juin au 8 juillet 2023</p>
                <p>2e séjour dans cette maison toujours aussi agréable ! <br/> Très bien située pour aller aux Thermes en 10 minutes <br/> Un grand merci à Myriam pour son accueil (sa fouace aveyronnaise et son jus de fruit...)<br/> Pourquoi pas un 3e séjour !!! pour une 3e cure. <br/> 2 curistes Val d'oisiennes</p>
                <p>Maylène et Jeannick</p>
            </div>
            
            <Footer/>
        </div>
    )
}
