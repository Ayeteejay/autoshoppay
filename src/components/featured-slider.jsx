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
            <MobileSlider>
            <Slider vertical={false} arrows={false} autoplay={true} autoplaySpeed={0} slidesToShow={1} slidesToScroll={1} speed={8000} pauseOnHover={false}>
                {featuredArr.map((value,index)=>{
                    return(
                        <div className="slide" key={index}>
                        <FeaturedCard data={value} ></FeaturedCard>
                        </div>
                    )
                })}
            </Slider>
            </MobileSlider>
        </React.Fragment>
    )
};
export default FeaturedSlider;