import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import './Slider2.css';
import { useState } from "react";

export function Slider2() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        {
            id:1,
            image:'src/components/img/int4.jpg',
            text:"La vue sur le gîte"
        },
        {
            id:2,
            image:'src/components/img/int5.jpg',
            text:"Les belles fleurs de nos terrasses paysagères"
        },
        {
            id:3,
            image:'src/components/img/Cuisine.jpg',
            text:"La cuisine"
        },
        {
            id:4,
            image:'src/components/img/int2.jpg',
            text:"Le chemin que vous empruntez"        
        },
        // {
        //     id:3,
        //     image:'src/components/img/int3.jpg',
        //     text:"Le parking, qui peut accueillir deux voitures"
        // },
        {
            id:5,
            image:'src/components/img/int6.jpg',
            text:"Le salon"
        },
        {
            id:6,
            image:'src/components/img/int7.jpg',
            text:"La terrasse arrière"
        },
        {
            id:7,
            image:'src/components/img/int8.jpg',
            text:"La première salle de bains"
        },
        {
            id:8,
            image:'src/components/img/int9.jpg',
            text:"La deuxième salle de bains"
        },
        {
            id:9,
            image:'src/components/img/int10.jpg',
            text:"La deuxième chambre"
        },
        {
            id:10,
            image:'src/components/img/int11.jpg',
            text:"Le gîte, vue du chemin de la Peyre"
        },
        {
            id:11,
            image:'src/components/img/int12.jpg',
            text:"La deuxième terrasse"
        },
        {
            id:12,
            image:'src/components/img/int13.jpg',
            text:"La deuxième terrasse"
        },
        {
            id:13,
            image:'src/components/img/int14.jpg',
            text:"La deuxième terrasse"
        },
        {
            id:14,
            image:'src/components/img/int15.jpg',
            text:"La cuisine"
        }
    ];

    return (
        <Carousel className="defil"
            // autoPlay
            infiniteLoop
            showStatus={false} // désactive la numérotation

        >
            {images.map(slide => (
          <div key={slide.id} className="">
            <img src={slide.image} alt="" className="frame"/>
            <div className="overlay">
                <p className="overlay_text">{slide.text}</p>
            </div>
          </div>
        ))}
        </Carousel>
    )
}