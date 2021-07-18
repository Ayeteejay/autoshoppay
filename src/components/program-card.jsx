import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    border:1px solid ${props=>props.theme.primaryColors.mintGreen};
    padding:2rem;
    position:relative;
    &:first-child:before{
        content:"";
        background:${props=>props.theme.primaryColors.mintGreen};
        position:absolute;
        top:-3.5rem;
        left:50%;
        color:red;
        height:3.5rem;
        width:1px;
    }
    &:nth-child(-n+3):after{
        content:"";
        background:${props=>props.theme.primaryColors.mintGreen};
        height:2rem;
        width:1px;
        position:absolute;
        bottom:-2rem;
        right:50%;
    }
    @media(min-width:${props=>props.theme.breakPoints.md}){
        &:nth-child(3):after{
            content:"";
            height:0;
        }
       &:nth-child(even):before{
        content:"";
        background:${props=>props.theme.primaryColors.mintGreen};
        height:1px;      
        width:2rem;
        position:absolute;
        top:50%;
        left:-2rem;
       }       
    }
    @media(min-width:${props=>props.theme.breakPoints.lg}){
        &:not(:last-child):after{
            content:"";
            background:${props=>props.theme.primaryColors.mintGreen};
            height:1px;
            width:2rem;
            position:absolute;
            top:50%;
            right:-2rem;
        }
    }
`

const ProgramCard = (props) =>{
    return(
        <CardWrapper>
           <img src={props.icon} className="icon" alt={props.icon.altText}/>
           <p className="small-header">{props.smallHeader}</p>
           <p>{props.description}</p>
        </CardWrapper>
    )
};
export default ProgramCard;