import Styled from "styled-components";

export const Container = Styled.div`
    font-family: 'Roboto', sans-serif;
    >div{
        background-color: ${({ theme }) => theme.colors.background};

        width: 100%;
        height: 100vh;

        display: grid;
        place-items: center;

        position: absolute;
        top: 0;

        div > h1{
            font-size: 1.6rem;
            font-weight: 600;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        div > h2{
            font-size: 1.2rem;
            font-weight: 400;
            margin-bottom: 2rem;
        }
    }
`

export const SectionNumbers = Styled.div`
    border: 1px solid red;
    height: 23rem;
`