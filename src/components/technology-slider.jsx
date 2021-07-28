import React from 'react';
import styled from 'styled-components';
import TechnologyCard from './technology-card.jsx';
import Slider from 'react-slick';

const SliderContainer = styled.div`
.slide{
    padding:0 10px 25px 10px;
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

const TechnologySlider = (props) =>{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerMode:true,
        className:"center",
        centerPadding:"120px",
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
    const technologyArr = (Object.values(props.data)).slice(Object.keys(props.data).length-4);
    return (
        <SliderContainer>
            <Slider {...settings}>
                {technologyArr.map((value,index)=>{
                    return(
                        <div className="slide" key={index}>
                        <TechnologyCard data={value}></TechnologyCard>
                        </div>
                    )
                })}
            </Slider>
        </SliderContainer>
    )
};
export default TechnologySlider;