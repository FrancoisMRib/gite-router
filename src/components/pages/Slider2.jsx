import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import './Slider2.css';
import { useState } from "react";

export function Slider2() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        {
            id:3,
            image:'src/components/img/int3.jpg',
            text:"Le parking, qui peut accueillir deux voitures"
        },
        {
            id:1,
            image:'src/components/img/int4.jpg',
            text:"Descente vers le Gîte"
        },
        {
            id:2,
            image:'src/components/img/int5.jpg',
            // text:"Les belles fleurs de nos terrasses paysagères"
        },
        {
            id:3,
            image:'src/components/img/int16.jpg',
            text:"Le salon, heureux de vous accueillir"
        },
        {
            id:3,
            image:'src/components/img/int17.jpg',
            text:"Autre vue du salon"
        },
        {
            id:11,
            image:'src/components/img/int12.jpg',
            text:"La deuxième terrasse"
        },
        // {
        //     id:11,
        //     image:'src/components/img/int1.jpg',
        //     text:"Lalalalala"
        // },
        {
            id:3,
            image:'src/components/img/Cuisine.jpg',
            text:"La cuisine"
        },
        {
            id:14,
            image:'src/components/img/int15.jpg',
            text:"La cuisine"
        },
        {
            id:8,
            image:'src/components/img/int9.jpg',
            text:"La première salle de bains"
        },
        {
            id:4,
            image:'src/components/img/int2.jpg',
            text:"Le chemin que vous empruntez"        
        },
        {
            id:9,
            image:'src/components/img/int10.jpg',
            text:"La deuxième chambre"
        },
        {
            id:7,
            image:'src/components/img/int8.jpg',
            text:"La seconde salle de bains"
        // },
        // {
        //     id:5,
        //     image:'src/components/img/int6.jpg',
        //     text:"Le salon"
        // },
        // {
        //     id:6,
        //     image:'src/components/img/int7.jpg',
        //     text:"La terrasse arrière"
        // },
        // {
        //     id:10,
        //     image:'src/components/img/int11.jpg',
        //     text:"Le gîte, vue du chemin de la Peyre"
        // },
        // {
        //     id:12,
        //     image:'src/components/img/int13.jpg',
        //     text:"La deuxième terrasse"
        // },
        // {
        //     id:13,
        //     image:'src/components/img/int14.jpg',
        //     text:"La deuxième terrasse"
        }
    ];

    return (
        <Carousel className="defil"
            // autoPlay
            infiniteLoop
            showStatus={false} // désactive la numérotation
            showIndicators={false} // désactive les indicateurs

        >
            {images.map(slide => (
          <div key={slide.id} >
            <img src={slide.image} alt="" className="frame"/>
            <div className="overlay">
                <p className="overlay_text">{slide.text}</p>
            </div>
          </div>
        ))}
        </Carousel>
    )
}