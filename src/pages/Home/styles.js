import styled from 'styled-components'


export const Button = styled.button`
    margin: 8px;
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
    width:120px;
    display:flex;
    position:relative;
    height:100%;
`
export const Div = styled.div`
display: flex;
justify-content: center;
flex-direction:row
`
export const Span = styled.span`
    margin: 0 120px 0 0;
    font-size:20px;
    font-weight:600;
    font-family: 'Shadows Into Light', cursive;
`

export const P = styled.p`
margin: 0 10px;
font-size:20px;
font-weight:600;
font-family: 'Shadows Into Light', cursive;
`