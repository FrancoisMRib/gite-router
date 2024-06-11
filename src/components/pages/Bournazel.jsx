import {Header} from '../Header';
import {Footer} from '../Footer';

export function Bournazel() {
    return (
        <div>
            <Header/>
            <h2 className='title'>Le château de Bournazel</h2>
            <button>
                <a href="region">Retour</a>
            </button>
            <div className='office'>
                <div >
                    <img src="src/components/img/bournazel.jpg" alt="" className='photo'/>
                </div>
                <div className='descriptif'>
                    <h4>Le château de Bournazel</h4>
                    <br />
                    <p> Le château de Bournazel, bla bla bla ... </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}