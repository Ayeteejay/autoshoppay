import React from 'react';
import styled from 'styled-components';
import DeviceCard from './device-card';
import Slider from 'react-slick';

const DeviceSlider = (props) =>{
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
    const deviceArr = (Object.values(props.data)).slice(Object.keys(props.data).length-3);
    return (
            <Slider {...settings}>
            {deviceArr.map((value,index)=>{
                return (
                    <div className="slide" key={index}>
                        <DeviceCard data={value}></DeviceCard>
                    </div>
                )
            })}
            </Slider>
    )
};
export default DeviceSlider