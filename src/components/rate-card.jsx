import React, {useState} from 'react';
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
    }
`

const FullScreenOverlay = styled.div`
height:100%;
width:100%;
background:white;
position:absolute;
top:0;
right:0;
transition:${props=>props.theme.animationSpeeds.fast};
`

const RateCard = (props) =>{
    const [modal,setModal] = useState(false);

    const openModal = () =>{
        setModal(!modal);
        console.log(modal);
    }

    return (
        <CardWrapper style={{border:`1px solid ${props.data.borderColor}`, background:props.data.backgroundColor}}>
            <p className="medium-header" style={{color:props.data.borderColor}}>{props.data.title}</p>
            <p>{props.data.description}</p>
            <p className="rate" style={{display: props.data.includeCtaLink === null ? "block" : "none",borderTop:`1px solid ${props.data.borderColor}`,color:props.data.borderColor}}>{props.data.rate}</p>      
           <button onClick={()=>openModal()} className="amber-cta" style={{display: props.data.includeCtaLink === null ? "none" : "block"}} >{props.data.link === null ? "" : props.data.link.title}</button>

            <FullScreenOverlay style={{opacity: modal === true ? "1" : "0",height:modal === true ? "100%" : "0"}}></FullScreenOverlay>

           {/* Original working link below */} 
           {/* <a onClick={()=>setModal(true)} className="amber-cta" style={{display: props.data.includeCtaLink === null ? "none" : "block"}} href={props.data.link === null ? "" : props.data.link.url}>{props.data.link === null ? "" : props.data.link.title}</a> */}
        </CardWrapper>
    )
};
export default RateCard