import styled from "styled-components";

export const Container = styled.div`
    max-width: 1100px;

    ul{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content: center;
    }
    li{
        list-style:none;  
    } 

    figure{
        background-color:#343434;
        padding:2px
    }
    img{
         width: 250px;
         height: 200px;
    }
    figcaption{
        text-align:center;
        color:#fff;
    }
`