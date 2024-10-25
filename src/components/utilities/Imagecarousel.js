import React from "react";
import Slider from "react-slick";
import './ImageCarousel.css';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '20%', 
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const images = [
        require('../../assets/rolderImage.png'),
        require('../../assets/rolderImage.png'),
        require('../../assets/rolderImage.png'),
        require('../../assets/rolderImage.png'),
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <div className="image-wrapper">
                            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;