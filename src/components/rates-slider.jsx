import React from 'react';
import RateCard from './rate-card.jsx';
import Slider from 'react-slick';

const RatesSlider = (props) =>{
    let settings = {
        dots: true,
        infinite: true,
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
    const ratesArr = (Object.values(props.data)).slice(Object.keys(props.data).length-3);
    return (

            <Slider {...settings}>
                {ratesArr.map((value,index)=>{
                    return (
                        <div className="slide" key={index}>                                          
                                <RateCard data={value}></RateCard>                         
                        </div>
                    )
                })}
            </Slider>

    )
};
export default RatesSlider