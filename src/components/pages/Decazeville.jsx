import {Header} from '../Header';
import {Footer} from '../Footer';
import './Bournazel.css';

export function Decazeville() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Decazeville</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Decazeville.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Decazeville</h4>
                    <br />
                    <p>Decazeville, bla bla bla ... </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}