import React from 'react';
import {Header} from '../Header';
import {Footer} from '../Footer';
import './Contact.css';

export function Contact () {
    return (
        <div>
            <Header/>
            <div className='title'>
                <h2 className='h4'>Nous contacter</h2>
                <h4 className='h4'>Contactez-nous de préférence par mail</h4>
            </div>
            <div className='agencement'>
                <div className='carton'>
                    <p>Contactez-nous par mail afin de pouvoir réserver au plus vite, en ayant au préalable 
                        tenu compte du calendrier et des disponibilités. 
                        Les locations peuvent aller de trois jours à plusieurs semaines. 
                        Ecrivez-nous et nous en parlerons !</p>
                    <p>Myriam Zidel-Cauffet</p>
                    {/* <div>
                        <p>     Contactez-nous par mail afin de pouvoir réserver au plus vite, en</p>
                        <p>ayant au préalable tenu compte du calendrier et des chambres disponibles.</p>
                        <p>     Les locations peuvent aller de trois jours à plusieurs semaines, et </p>
                        <p>mobiliser plusieurs chambres. Ecrivez-nous et nous en parlerons ! </p>
                        <p>Myriam Zidel-Cauffet</p>
                    </div> */}
                    <img src="src/components/img/ext3.jpg" alt="" className='map'/>
                </div>
                <div className='title2'>
                    {/* <div className='place'></div> */}
                    <div className='heady'></div>
                    <div className='middleonpos'>
                        <p className=''>Mail</p>
                        <p className='inter'>myriam.zidel@yahoo.fr</p>
                        <p className=''>Adresse</p>
                        <p className='inter'>Chemin de la Peyre - 12300 Firmi</p>
                        <p>Téléphone</p>
                        <p className='inter'>06-07-90-75-58</p>
                    </div>
                    <div className='heady'></div>
                    {/* <br /> */}
                    {/* <p className='inter'>Cliquez sur la carte pour voir quels sont les principaux axes routiers
                    à proximité du gîte et de Firmi</p> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
    
}