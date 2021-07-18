import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
 border:1px solid ${props=>props.theme.primaryColors.aspBlue};
 transition:all ${props=>props.theme.animationSpeeds.fast};
 .device-row{
     background:${props=>props.theme.primaryColors.aspBlue};
     transition:all ${props=>props.theme.animationSpeeds.normal};
 }
 &:hover{
     transform:scale(1.05);
     border:1px solid ${props=>props.theme.primaryColors.amber};
     -webkit-box-shadow: 0px 21px 18px 5px rgba(0,0,0,0.5); 
box-shadow: 0px 21px 18px 5px rgba(0,0,0,0.5);
     .device-row{
        background:${props=>props.theme.primaryColors.amber};
     }
 }
`


const BulletRow = styled.div`
 padding:2rem;
 .device-subheader{
     padding:0 0 0.5rem 0;
 }
`

const DeviceCard = (props) =>{
    return (
        <CardWrapper>
            <div className="device-row">
                <img src={props.data.device.sourceUrl} alt={props.data.device.altText} className="fluid-img"/>
            </div>
            <BulletRow>
                <p className="medium-header blue device-subheader">{props.data.title}</p>   
                <div dangerouslySetInnerHTML={{__html:`${props.data.bullets}`}}></div>             
            </BulletRow>
        </CardWrapper>
    )
};
export default DeviceCard