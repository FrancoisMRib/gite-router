import './Footer.css';
//METTRE En-dessous la source du fichier audio quand je l'aurais
//import sound from "";
import { Link } from 'react-router-dom';
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
                    <p><Link to={'/stuff'} className='pusher'>Protection des données</Link></p>
                    <p><Link to={'/stuff'} className='pusher'>Politique des cookies</Link></p>
                </div>
                <div className="footerPipe" />
                <div>
                    <p><Link to={'/stuff'} className='pusher'>Conditions générales</Link></p>
                    <p><Link to={'/stuff'} className='pusher'>Mentions légales</Link></p>
                </div>
                <div className="footerPipe" />
                <div>
                    <p><Link to={'/stuff'} className='pusher'>Langue</Link></p>
                    <p><Link to={'/stuff'} className='pusher'>Accessibilité</Link></p>
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