import styled from "styled-components";

// estilizando o Header

export const Divs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:1px;
    width: -webkit-fill-available;
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

// estilizando o MAIN

export const Main = styled.main`
    margin: 0 5%;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    
    img{
        width: 70%;
        margin: 0 auto;
        }

    @media(min-width:768px){

        img{
        width: 50%;
        height: 50vh;
        margin:12% auto;
        }
    }
    
   `

export const Div = styled.div`

    margin: 0 auto;
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    @media(min-width:768px){
        width: 49%;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input{
        margin: 10px;
    }
`