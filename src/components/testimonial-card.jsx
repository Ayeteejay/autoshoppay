import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
background:${props=>props.theme.secondaryColors.offGray};
display:flex;
cursor:grab;
`;

const LocationColumn = styled.div`

`

const TestimonialColumn = styled.div`
padding:3rem;
.testimonial{
    font-size:1.4375rem;
    font-weight:400;
    padding:0 0 1rem 0;
}
.source-title{
    text-transform:uppercase;
    font-size:0.875rem;
}
`

const TestimonialCard = (props) => {
    return(
        <CardWrapper>
            <LocationColumn style={{display: props.data.quoteImage !== null ? "block" : "none"}}>
                {/* <img src={props.data.quoteImage.sourceUrl} className="img-fluid"/> */}
                <p>Hellloo</p>
            </LocationColumn>
            <TestimonialColumn>
                <p className="testimonial">{props.data.quote}</p>
                <p className="blue"><strong>{props.data.source}</strong></p>
                <p className="source-title">{props.data.sourceTitle}</p>
            </TestimonialColumn>
        </CardWrapper>
    )
};
export default TestimonialCard;