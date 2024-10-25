import React from "react";
import Slider from "react-slick";

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <div style={{ width: '90%', margin: '0 auto' }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;