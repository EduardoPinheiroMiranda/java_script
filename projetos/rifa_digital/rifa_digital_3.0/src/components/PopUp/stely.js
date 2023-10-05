import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};

    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;

`

export const BodyPopUp = styled.div`
    font-family: 'Roboto', sans-serif;

    background-color: ${({ theme }) => theme.colors.white};

    width: 25rem;
    height: 35rem;

    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    text-align: center;
    
    position: relative;
    
    >svg{
        color: ${({ theme }) => theme.colors.red};

        width: 1rem;
        height: 1rem;

        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    >h1{
        font-size: 1.6rem;
        font-weight: 600;
        margin-top: 1rem;
    }

    >button{
        background-color: ${({ theme }) => theme.colors.blue};

        position: absolute;
        bottom: 1rem;
        left: 5rem;

        span{
            color: ${({ theme }) => theme.colors.white};
        }
    }
`

export const Section = styled.section`

    margin-top: 1rem;

    >span{
        font-size: 1.2rem;
        font-weight: 400;
    }

    >div{
        margin-top: 2rem;
        
        display: flex;
        justify-content: space-between;

        div{
            background-color: ${({ theme }) => theme.colors.blue};
        }
    }
    
`
