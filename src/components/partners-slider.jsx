import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const SliderWrapper = styled.div`
position:relative;
.slide{
    padding:1rem;
}
.slick-slide{
    display:flex;
    justify-content:center;
    height:100%;
    align-items:center;
}
.partner-logo{
    max-height:25px;
    @media(min-width:${props=>props.theme.breakPoints.md}){
        max-height:40px;
    }
}
&:before{
    content:"";
    position:absolute;
    right:0;
    bottom:0;
    background:red;
    z-index:1;
    height:100%;
    width:30px;
    -webkit-box-shadow: -19px 0px 28px 15px ${props=>props.theme.secondaryColors.offGray}; 
    box-shadow: -19px 0px 28px 15px ${props=>props.theme.secondaryColors.offGray};
    background:${props=>props.theme.secondaryColors.offGray};
}
&:after{
    content:"";
    position:absolute;
    left:0;
    bottom:0;
    height:100%;
    width:30px;
    -webkit-box-shadow: 19px 0px 28px 15px ${props=>props.theme.secondaryColors.offGray}; 
    box-shadow: 19px 0px 28px 15px ${props=>props.theme.secondaryColors.offGray};
    background:${props=>props.theme.secondaryColors.offGray};
}
`

const PartnersSlider = (props) =>{
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed:0,
        cssEase: "linear",
        arrows:false,        
      }
    const partnersLogosArr = (Object.values(props.data)).slice(Object.keys(props.data).length-7);
    return (
                <SliderWrapper>
                        <Slider {...settings}>
                             {partnersLogosArr.map((value,index)=>{
                                 return (
                                     <div key={index}>
                                        <img src={value.sourceUrl} alt={value.altText} className="partner-logo"/>
                                     </div>
                                 )
                             })}
                          </Slider>        
                </SliderWrapper>
    )
};
export default PartnersSlider