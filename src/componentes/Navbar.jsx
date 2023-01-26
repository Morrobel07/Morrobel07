import logo from '../assets/img/logo.png'
import React, { useState } from "react"
import BurguerButton from "./BurguerButton"
import styled from "styled-components"
import { click } from '@testing-library/user-event/dist/click'




function Navbar() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }



    return (
        <>

            <NavContainer>

                <img className='img' src={logo} alt='' />
                <h2>Morrobel<span>Media</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/">Shop</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>


                </div>
                <div className="burguer">
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}




export default Navbar

const NavContainer = styled.nav`

position: fixed;
top: 0%;
width: 100%;
height: 1px;

h2{
    font-weight:400;

    
    span{
        font-weight: bold;
    }
   }
   padding: 4rem;
    background-color: #b1dcff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height:0px;
    z-index: 3;
    
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .img {
        
       
        width: 100px;
        height: auto;
       
    
        
    }

    .links{
     position: relative;
     top: -500px;
     left: -800px;
     right: 0;
     margin-left: auto;
     margin-right: auto;
     text-align: center;
     transition: all .5s ease;
    
     a{
        color: black;
        font-size: 2rem;
        display:block;
     }

     @media(min-width: 768px){      
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline ;
      }
        }
    }
   .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 200px;
    left: 200px;
    right: 0;
    text-align: center;
    a{
        color: #444444;
        margin-top: 2rem;
        font-size: 2.5rem;
        transform: translateX(-3rem);
        
        
        
    }

   }
    .burguer{
        
        @media(min-width: 768px){
            display:none;  
   
        
        }
    }

   
   `
const BgDiv = styled.div`
        position: absolute;
      //background-color: #088faa;     
        top: -700px;
        left: -1000px;
        z-index: -1;
        transition: all .6s ease ; 
        &.active{
          
            width:50%;
        height: 100%;
        top: 0;
        left: 50%;

        
        }
        
    `

