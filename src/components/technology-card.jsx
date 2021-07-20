import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
`

const TechnologyRow = styled.div`
display:flex;
justify-content:center;
img{
    max-width:80%;
    padding:0 0 1rem 0;
}
`


const TechnologyCard = (props) =>{
    return(
        <CardWrapper>
            <TechnologyRow>
                <img src={props.data.device.sourceUrl} alt={props.data.device.altText}></img>
            </TechnologyRow>
            <p className="medium-header blue">{props.data.title}</p>
        </CardWrapper>
    )
};
export default TechnologyCard