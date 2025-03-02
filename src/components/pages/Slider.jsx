import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import './Slider.css';
import { useState } from "react";

export function Slider() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        {
            id:1,
            image:'src/components/img/ext1.jpg',
            text:"La vue sur le Gîte depuis les Terrasses où vous pourrez garer vos voitures"
        },
        {
            id:2,
            image:'src/components/img/ext2.jpg',
            text:"La Vigne à laquelle le Gîte doit son nom"
        },
        {
            id:3,
            image:'src/components/img/ext3.jpg',
            text:"Belles Agapantes que vous apercevrez"
        },
        {
            id:4,
            image:'src/components/img/ext4.jpg',
            text:"Terrasses Paysagères"
            // text:"Les terrasses paysagères agrémentant les 36 marches vous conduiront au gîte"

        },
        {
            id:5,
            image:'src/components/img/ext5.jpg',
            text:"Le Chemin qui vous amène au Gîte"
        },
    ];

    return (
        <Carousel className="defil"
            // autoPlay
            infiniteLoop
            showStatus={false} // désactive la numérotation
            showArrows={true}   // Garde les flèches si tu le souhaites

        >
            {images.map(slide => (
          <div key={slide.id} className="frame">
            <img src={slide.image} alt="" />
            <div className="overlay">
                <p className="overlay_text">{slide.text}</p>
            </div>
          </div>
        ))}
        </Carousel>
    )
}