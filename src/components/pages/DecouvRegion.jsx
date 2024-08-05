import {Header} from '../Header';
import {Footer} from '../Footer';
import './DecouvRegion.css';
import thermes from '../img/Cransac2.jpg';

export function DecReg() {
    return (
        <div>
            <Header/>
            <div className='underline'>
            <h2 className='title'>Découvrez la région aux alentours !</h2>

                <h4>
                    Qu'aimeriez-vous voir dans la région ?
                </h4>
                <div className='background'>
                    <p>Cliquez sur une image pour en savoir plus</p>
                </div>
            </div>
            <br/>
            <div className='panel'>
                <a href="bournazel"><img src="src/components/img/bournazel.jpg" alt="Le château de Bournazel" className='window'/></a>
                <a href="cransac"><img src={thermes} alt="Les thermes de Cransac" className='window'/></a>
                <img src="src/components/img/Rodez.jpg" alt="La ville de Rodez" className='window'/>
                <img src="src/components/img/Belcastel.png" alt="Le village de Belcastel" className='window'/>
            </div>
            <div className='panel'>
                <a href="www.google.com"><img src="src/components/img/Flagnac.jpg" alt="Le festival de Flagnac" className='window'/></a>
                <a href="www.google.com"><img src="src/components/img/Decazeville.jpg" alt="Le pays Decazevillois" className='window'/></a>
                <a href="www.google.com"><img src="src/components/img/Conques-nuit.jpg" alt="Conques-en-Rouergue" className='window'/></a>
                <a href="www.google.com"><img src="src/components/img/Rocamadour.jpg" alt="La ville de Rocamadour" className='window'/></a>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}