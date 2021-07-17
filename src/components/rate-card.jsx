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
`

const RateCard = (props) =>{
    return (
        <CardWrapper style={{border:`1px solid ${props.data.borderColor}`, background:props.data.backgroundColor}}>
            <p className="medium-header" style={{color:props.data.borderColor}}>{props.data.title}</p>
            <p>{props.data.description}</p>
            <p className="rate" style={{borderTop:`1px solid ${props.data.borderColor}`,color:props.data.borderColor}}>{props.data.rate}</p>
        </CardWrapper>
    )
};
export default RateCard