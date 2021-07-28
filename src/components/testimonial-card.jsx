import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
.card-settings{
    background:${props=>props.theme.secondaryColors.offGray};
    display:grid;
}
.location-card, .no-location-card{
    grid-template-columns:1fr;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    .location-card{
        grid-template-columns:1fr 2fr;
    }
}
`;

const LocationColumn = styled.div`
background-size:cover;
`

const QuoteColumn = styled.div`
padding:3.5rem;
.bottom-row{
 
}
.source-title-column{

}
.source-logo-column{
 width:20%;
 padding:0.25rem 0 0 0;
}
.quote{
    font-size:1rem;
    padding:0 0 1rem 0;
    font-weight:400;
    position:relative;
   &:before{
       content:'"';
       position:absolute;
       left:-8px;
   }
   &:after{
       content:'"';
   }
}
.source-title{
    text-transform:uppercase;
    font-size:0.875rem;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    .quote{
        font-size:1.4375rem;
        padding:0 0 1rem 0;
        &:before{
            left:-10px;
        }
    }
    .bottom-row{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .source-logo-column{
        padding:0;
    }
}
`

const TestimonialCard = (props) => {
    return(
        <CardWrapper>
            <div className={props.data.quoteImage === null ? "no-location-card card-settings" : "location-card card-settings"}>
            <LocationColumn style={{display: props.data.quoteImage !== null ? "block" : "none", backgroundImage:`url(${props.data.quoteImage === null ? "" : props.data.quoteImage.sourceUrl})`}}>
            </LocationColumn>
            <QuoteColumn>           
                <p className="quote">{props.data.quote}</p>
                  <div className="bottom-row">
                        <div className="source-title-column">
                            <p className="blue"><strong>{props.data.source}</strong></p>
                            <p className="source-title">{props.data.sourceTitle}</p>
                        </div>
                        <div className="source-logo-column">
                            <img className="fluid-img" src={props.data.sourceLogo === null ? "" : props.data.sourceLogo.sourceUrl} alt={props.data.sourceLogo === null ? "" : props.data.sourceLogo.altText}></img>
                        </div>
                  </div>
            </QuoteColumn>
            </div>
        </CardWrapper>
    )
};
export default TestimonialCard;