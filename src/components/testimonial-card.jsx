import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
background:${props=>props.theme.secondaryColors.offGray};
display:grid;
grid-template-columns:1fr 2fr;
cursor:grab;
`;

const LocationColumn = styled.div`
background-size:cover;
`

const TestimonialColumn = styled.div`
padding:3.5rem;
.testimonial{
    font-size:1.4375rem;
    font-weight:400;
    padding:0 0 1rem 0;
    position:relative;
   &:before{
       content:'"';
       position:absolute;
       left:-10px;
   }
   &:after{
       content:'"';
   }
}
.source-title{
    text-transform:uppercase;
    font-size:0.875rem;
}
`

const ImageIncludedCard = styled.div`

`

const NoImageCard = styled.div`

`

const TestimonialCard = (props) => {
    return(
        <CardWrapper style={{gridTemplateColumns: props.data.quoteImage === null ? "1fr" : "1fr 2fr"}}>
            <LocationColumn style={{display: props.data.quoteImage !== null ? "block" : "none", backgroundImage:`url(${props.data.quoteImage === null ? "" : props.data.quoteImage.sourceUrl})`}}>
            </LocationColumn>
            <TestimonialColumn>
                <p className="testimonial">{props.data.quote}</p>
                <p className="blue"><strong>{props.data.source}</strong></p>
                <p className="source-title">{props.data.sourceTitle}</p>
            </TestimonialColumn>

        {/* If the card has an image */}
            <ImageIncludedCard style={{display: props.data.quoteImage !== null ? "block" : "none", backgroundImage:`url(${props.data.quoteImage === null ? "" : props.data.quoteImage.sourceUrl})`}}>
            <LocationColumn style={{backgroundImage:`url(${props.data.quoteImage === null ? "" : props.data.quoteImage.sourceUrl})`}}>
            </LocationColumn>
            <TestimonialColumn>
                <p className="testimonial">{props.data.quote}</p>
                <p className="blue"><strong>{props.data.source}</strong></p>
                <p className="source-title">{props.data.sourceTitle}</p>
            </TestimonialColumn>
            </ImageIncludedCard>

        {/* If the card DOES NOT have an image */}
            <NoImageCard style={{display: props.data.quoteImage === null ? "none" : "block"}}>
            <TestimonialColumn>
                <p className="testimonial">{props.data.quote}</p>
                <p className="blue"><strong>{props.data.source}</strong></p>
                <p className="source-title">{props.data.sourceTitle}</p>
            </TestimonialColumn>
            </NoImageCard>

        </CardWrapper>
    )
};
export default TestimonialCard;