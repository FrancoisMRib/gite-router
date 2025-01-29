import { Header } from "./Header";
import { Footer } from "./Footer";
import './FooterStuff.css';

export function Stuff() {
    return (
        <div>
            <Header/>
                <div className="law">
                <h1>Protection des données</h1>
                <h1>Politique des cookies</h1>
                <h1>Conditions générales</h1>
                <h1>Mentions légales</h1>
                <h1>Langue</h1>
                <h1>Accessibilité</h1>
                </div>
            <Footer/>
        </div>
    )
}