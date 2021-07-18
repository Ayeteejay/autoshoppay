import React from 'react';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
display:flex;
justify-content:center;
`

const OptionsContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
position:relative;
display:flex;
justify-content:center;
flex-flow:column
`

const DescriptionRow = styled.div`
display:flex;
flex-flow:column;
align-items:center;
text-align:center;
padding:0 0 3rem 0;
`

const Options = () => {
    return (
        <OptionsWrapper>
            <OptionsContainer>
                <DescriptionRow>
                    
                </DescriptionRow>
            </OptionsContainer>
        </OptionsWrapper>
    )
};
export default Options