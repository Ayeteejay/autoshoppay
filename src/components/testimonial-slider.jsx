import React from 'react';
import styled from 'styled-components';
import TestimonialCard from './testimonial-card.jsx';
import Slider from 'react-slick';

const SliderContainer = styled.div`
.slide{
    padding:1rem;
    cursor:grab;
}
ul.slick-dots li.slick-active{
    background-color:#0036FF;    
    border-radius:50%;
    height:12px;
    transition:all ${props=>props.theme.animationSpeeds.extraFast} ease-in-out;
}
ul.slick-dots li{
    height:12px;
    width:12px;
}
`

const TestimonialSlider = (props) =>{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    customPaging: page => (
        <div
          style={{
            width: "12px",
            height:"12px",
            border:"1px solid #0036FF",            
            borderRadius:"50%",            
          }}
        >          
        </div>
      )
    }
    const testimonialArr = (Object.values(props.data)).slice(Object.keys(props.data).length-(props.quantityOfQuotes));
    return (
        <SliderContainer>
            <Slider {...settings}>
                {testimonialArr.map((value,index)=>{
                    return(
                        <TestimonialCard key={index} data={value}></TestimonialCard>
                    )
                })}
            </Slider>
        </SliderContainer>
    )
};
export default TestimonialSlider;
