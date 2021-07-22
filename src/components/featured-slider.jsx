import React from 'react';
import styled from 'styled-components';
import FeaturedCard from './featured-card.jsx';
import Slider from 'react-slick';

const SliderContainer = styled.div`
`

const FeaturedSlider = (props) =>{
    let settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover:false,
    }
    const featuredArr = (Object.values(props.data)).slice(Object.keys(props.data).length-props.quantityOfFeatured);
    return (
        <SliderContainer>
            <Slider {...settings}>
                {featuredArr.map((value,index)=>{
                    return(
                        <FeaturedCard key={index} data={value}></FeaturedCard>
                    )
                })}
            </Slider>
        </SliderContainer>
    )
};
export default FeaturedSlider;