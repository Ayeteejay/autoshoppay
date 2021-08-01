import React from 'react';
import styled from 'styled-components';
import TechnologyCard from './technology-card.jsx';
import Slider from 'react-slick';

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
            <Slider {...settings}>
                {technologyArr.map((value,index)=>{
                    return(
                        <div className="slide" key={index}>
                        <TechnologyCard data={value}></TechnologyCard>
                        </div>
                    )
                })}
            </Slider>
    )
};
export default TechnologySlider;