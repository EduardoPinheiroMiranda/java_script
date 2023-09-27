import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.colors.background_800};
        color: ${({ theme }) => theme.colors.white}
    }

    button , a {
        cursor: pointer;
        text-decoration: none
    }

    button:hover , a:hover {
        filter: brightness(0.9); 
    }


`;