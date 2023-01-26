import React from 'react'
import { useEffect, useState } from 'react'

import { Container, Row,Col } from 'react-bootstrap'
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import astro from '../assets/img/astro.jpg'


function Banner () {
    const [loopNum,setLoopNum] = useState(0);
    const [deleting,setDeleting] =useState(false);
    const toRotate=["Web Developer","Web Designer","UI/UX Designer"];
    const [text,setTExt] = useState('');
    const [delta,SetDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

const tick = () =>{
    let i = loopNum % toRotate.length
    let fullText = toRotate[i];
     let updateText = deleting?fullText.substring(0,text.length -1) : fullText.substring(0,text.length +1 )

setTExt(updateText);

if (deleting){
    setDeleting(prevDelta => prevDelta/2)
}
if(!deleting && updateText === fullText){
    setDeleting(true);
    SetDelta(period);
} else if (deleting && updateText === ''){
    setDeleting(false);
    setLoopNum(loopNum +1)
    SetDelta(500);
}

}

    return (

 <NewContainer>
    <section className='banner' id='home'>
    <Container >
        <Row className="align-items-center">
            <Col className='card' xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my Portafolio</span>
                <h1>{'Hola soy Morrobel'} <span className='wrap'>{text}</span></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius neque quod velit deserunt perferendis distinctio? Vero saepe repellat provident vel iure maiores suscipit reiciendis, mollitia culpa blanditiis nisi voluptate?</p>
                <Button variant='primary' onClick={()=> {console.log('connect')}} >lets connect </Button>
            
            </Col>
        <Col xs={12} md={6} xl={7}>
        
        </Col>
           
        </Row>
    </Container>
   
    </section>
    </NewContainer>
    
    )
    }

export default  Banner 

const NewContainer = styled.section`
.banner{
background-image: url(${astro});
margin-top:0;
padding: 150px 0 100px 0  ;
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: scroll;
z-index: 1;  
animation: drop 7s ease infinite ;


}

@keyframes drop {
    0% {backdrop-filter:blur(1px)}
    25%{backdrop-filter:blur(2px)}
    50%{backdrop-filter:blur(3px)}
    75%{backdrop-filter:blur(4px)}
    100%{backdrop-filter:blur(5px)}

    
}


.banner .tagline{
    font-family: 'poppins','medium';
    font-weight: 500;
    letter-spacing: 0.8px ;
    padding:8px 10px ;
    background: linear-gradient(90.21deg, rgba(170,54,124,0.5 ) -5.91%, rgba(74,47,189,0.5));
    border: 1px solid rgba(255,155,155,0.5);
    font-size: 20px;
    margin-bottom:16px ;
    display: inline-block;


}

.banner h1 {
    font-size: 65px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 1;
    margin-bottom:20px ;
    display: block;
}
.banner p {
    color: #26011a;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    width: 96%;
}
.banner button{
    color: white;
    font-weight: 700;
    font-size: 20px;
    margin-top: 60px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

}
.align-items-center{
   
}
.card{
    width: 400px;
    height: 700px;
    padding: 20px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    background: #c9ffff7f;
    border-left: 1px solid #f3f3f37f ;
    border-top: 1px solid #a1a1a17f ;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    transition: all 300ms;
    z-index: 2;

};

 
`;