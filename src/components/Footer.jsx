import './Footer.css';
//METTRE En-dessous la source du fichier audio quand je l'aurais
//import sound from "";
import { useState, useEffect } from 'react';

export function Footer() {

    const [value, setValue] = useState(0);

    // useEffect(()=>{
    //     if(value % 2 === 0)
    //     play()
    // }, [value]);

    // function play() {
    //     new Audio(sound).play()
    // }

    return (
        <div className="Footer">
            {/* <p>Mentions légales</p>
            <p>Confidentialité</p>
            <p>Protection des données</p>
            <p>Langue</p>
            <p>Accessibilité</p>
            <p>Politiques des cookies</p> */}
            <div id="footerContactInfo">
                {/* <p>Qui sommes-nous ?</p>
                <p>Nous contacter</p> */}
            </div>
            <div id="footerOptions">
                <div>
                    <p>Protection des données</p>
                    <p>Politique des cookies</p>
                </div>
                <div className="footerPipe" />
                <div>
                    <p>Conditions générales</p>
                    <p>Mentions légales</p>
                </div>
                <div className="footerPipe" />
                <div>
                    <p>Langue</p>
                    <p>Accessibilité</p>
                </div>
            </div>
            {/* <div className='music'>
                <button onClick={()=> setValue(value+1)}>
                    Arrêter ou relancer la musique
                </button>
            </div> */}
            <div id="footerCopyright">
                © Copyright 2024 Gîte la Vigne | Tous droits réservés
            </div>
        </div>
    )
    ;
}