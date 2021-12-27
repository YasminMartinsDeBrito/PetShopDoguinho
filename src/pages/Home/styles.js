import styled from 'styled-components'


// estilização do HEADER

export const Divs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:1px;
    width: -webkit-fill-available;
`
export const Button = styled.button`
    margin: 5px;
    margin-right: 5%;
    border: none;
    background-color:#DDA15E;
    
    p{
        cursor:pointer;
        color:#000;

        :hover{
        color:#fff;
        border-bottom: 1px solid #fff;
        font-size: 15px;
        } 
    }
   
`

export const Img = styled.img`
    width:110px;
    display:flex;
    position:relative;
    height:90%;
`

export const Span = styled.span`
   
    font-size:25px;
    font-weight:600;
    color:#000;
    text-shadow:-3px -3px 2px #FFF, 
               -3px 3px 5px #FFF,                    
                1px -3px 2px #FFF,                  
                1px 2px 5px #FFF;
    font-family: 'Shadows Into Light', cursive;
`

export const P = styled.p`
font-size:30px;
float:right;
font-weight:600;
color:#000;
text-shadow:-1px -3px 2px #FFF, 
               -3px 3px 5px #FFF,                    
                1px -3px 2px #FFF,                  
                1px 2px 5px #FFF;
font-family: 'Shadows Into Light', cursive;

span{
    color: red;
}
`


// Estilização da MAIN

export const Main = styled.main`
   margin: 0 5%;

   section{
       display: flex;
       flex-direction: column;
       border-bottom:1px solid #DDA15E;
       height: 250px;
       button{
           margin-bottom:5px;
           width: 60px;
           text-align:center;
           padding:3px;
       }
   }

`

//  estilização do FOOTER

export const Footer = styled.footer`
    margin: 0 5%;
    height: 200px;
`