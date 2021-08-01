import React from 'react';
import styled from 'styled-components';
import TestimonialCard from './testimonial-card.jsx';
import Slider from 'react-slick';

const SliderContainer = styled.div`
.slide{
    @media(min-width:${props=>props.theme.breakPoints.lg}){
        padding:0 200px 25px 200px
    }
}
`

const TestimonialSlider = (props) =>{
    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerMode:true,
        className:"center",
        centerPadding:"50px",
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
                        <div className="slide" key={index} >
                        <TestimonialCard data={value}></TestimonialCard>
                        </div>
                    )
                })}
            </Slider>
        </SliderContainer>
    )
};
export default TestimonialSlider;
