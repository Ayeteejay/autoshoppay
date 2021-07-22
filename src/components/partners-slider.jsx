import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const SliderContainer = styled.div`
.slide{
    padding:1rem;
}
.slick-slide{
    display:flex;
    justify-content:center;
}
`

const PartnersSlider = (props) =>{
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows:false,
      }
    const partnersLogosArr = (Object.values(props.data)).slice(Object.keys(props.data).length-7);
    return (
        <SliderContainer>
                        <Slider {...settings}>
                             {partnersLogosArr.map((value,index)=>{
                                 return (
                                     <div key={index}>
                                        <img src={value.sourceUrl} alt={value.altText}/>
                                     </div>
                                 )
                             })}
                          </Slider>             
        </SliderContainer>
    )
};
export default PartnersSlider