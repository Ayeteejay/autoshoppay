import React from 'react';
import styled from 'styled-components';
import FeaturedCard from './featured-card.jsx';
import Slider from 'react-slick';

const DesktopSlider = styled.div`
display:none;
@media(min-width:${props=>props.theme.breakPoints.md}){
    display:block;
}
`

// Working on mobile carousel
const MobileSlider = styled.div`
margin:1rem;
width:200px;
.slide{
    padding:1rem;
}
@media(min-width:${props=>props.theme.breakPoints.md}){
    display:none;
}
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
        <React.Fragment>
            <DesktopSlider>
            <Slider {...settings}>
                {featuredArr.map((value,index)=>{
                    return(
                        <FeaturedCard key={index} data={value}></FeaturedCard>
                    )
                })}
            </Slider>
            </DesktopSlider>
            {/* <MobileSlider>
            <Slider vertical={false} arrows={false}>
                {featuredArr.map((value,index)=>{
                    return(
                        <FeaturedCard key={index} data={value} slidesToShow={1} ></FeaturedCard>
                    )
                })}
            </Slider>
            </MobileSlider> */}
        </React.Fragment>
    )
};
export default FeaturedSlider;