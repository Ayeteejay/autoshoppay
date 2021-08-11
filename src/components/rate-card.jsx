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
    }
`

// const FullScreenOverlay = styled.div`
// height:100%;
// width:100%;
// background:blue;
// position:absolute;
// z-index:999;
// top:0;
// right:0;
// transition:${props=>props.theme.animationSpeeds.fast};
// `

const RateCard = (props) =>{
    // const [modal,setModal] = useState(false);

    // const openModal = () =>{
    //     setModal(!modal);
    //     console.log(modal);
    // }

    // Show rate percentage or modal window button
    const rateRow = (conditional) => {
            if(conditional.includeCtaLink){
                return (
                    <button onClick={props.modalSwitch} className="amber-cta">{conditional.link.title}</button>
                )
            }else{
                return (
                    <p className="rate" style={{borderTop:`1px solid ${conditional.borderColor}`,color:conditional.borderColor}}>{conditional.rate}</p>
                )
            }
    }

    const iframeWindow = (conditional) => {
        if(conditional.includeCtaLink){
            return (
                <iframe src={conditional.link.url} title="Upload your statement to get a price quote." height="100%" width="100%"/>
            )
        }
    }


    return (
        <CardWrapper style={{border:`1px solid ${props.data.borderColor}`, background:props.data.backgroundColor}}>
            <p className="medium-header" style={{color:props.data.borderColor}}>{props.data.title}</p>
            <p>{props.data.description}</p>



            {/* <FullScreenOverlay style={{opacity: modal === true ? "1" : "0",height:modal === true ? "100%" : "0"}}>
                {iframeWindow(props.data)}
            </FullScreenOverlay> */}


           {rateRow(props.data)}
        </CardWrapper>
    )
};
export default RateCard