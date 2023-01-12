import logo from '../assets/img/logo.png'
import React,{useState}from "react"
import BurguerButton from "./BurguerButton"
import styled from "styled-components"




function Navbar (){

const[clicked,setClicked] = useState(false)

const handleClick = () =>{
    setClicked(!clicked)
}



    return (
<>

    <NavContainer>
    <div >
       <img className='img' src={logo} alt=''/>
       </div>
        <h2>Morrobel<span>Media</span></h2>
        <div className={`links ${clicked ? 'active':'' }`}>
            <a href="/">Home</a>
            <a href="/">Shop</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            
            
        </div>
       <div className="burguer">
       <BurguerButton clicked={clicked} handleClick={handleClick}/>
       </div>

       
    </NavContainer>
</>
    )
}




export default Navbar

const NavContainer = styled.nav`
h2{
    font-weight:400;

    
    span{
        font-weight: bold;
    }
   }
   padding: 4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 0.5px;
    
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
     margin-left: auto;
     margin-right: auto;
     text-align: center;
    
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
        color: #333;
        
    }

   }
    .burguer{
        @media(min-width: 768px){
            display:none;            
        }
    }
   `

