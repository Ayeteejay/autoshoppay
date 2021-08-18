import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    padding:2rem; 
    p.rate{
        font-size:1.4375rem;
        font-weight:700;
        padding:0.5rem 0 0 0;
        margin:0.5rem 0 0 0;
    }
    button{
     margin:0.5rem 0 0 0;
     font-family: "Work Sans", sans-serif;
     display:none !important;
     @media(min-width:${props=>props.theme.breakPoints.md}){
         display:block !important;
     }
    }
    .mobile-link{
        margin:0.5rem 0 0 0;
        @media(min-width:${props=>props.theme.breakPoints.md}){
            display:none;
        }
    }
`

const RateCard = (props) =>{
    const rateRow = (conditional) => {
            if(conditional.includeCtaLink){
                return (
                    <React.Fragment>
                    <button onClick={props.modalSwitch} className="amber-cta">{conditional.link.title}</button>
                    <a href={conditional.link.url} className="amber-cta mobile-link" target="_blank" rel="noreferrer noopener">{conditional.link.title}</a>
                    </React.Fragment>
                )
            }else{
                return (
                    <p className="rate" style={{borderTop:`1px solid ${conditional.borderColor}`,color:conditional.borderColor}}>{conditional.rate}</p>
                )
            }
    }
    return (
        <CardWrapper style={{border:`1px solid ${props.data.borderColor}`, background:props.data.backgroundColor}}>
            <p className="medium-header" style={{color:props.data.borderColor}}>{props.data.title}</p>
            <p>{props.data.description}</p>
           {rateRow(props.data)}
        </CardWrapper>
    )
};
export default RateCard