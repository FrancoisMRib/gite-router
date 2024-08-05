import {Header} from '../Header';
import {Footer} from '../Footer';

export function Cransac() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Les termes de Cransac</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/Cransac2.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Les termes de Cransac</h4>
                    <br />
                    <p> Les termes de Cransac sont très chouettes, bla bla bla ... </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}