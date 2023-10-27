import Styled from "styled-components";

export const Container = Styled.div`
    font-family: 'Roboto' , sans-serif;
    
`

export const Page = Styled.div`
    width: 100%;
    height: 100vh;

    position: relative;

     >main {

        nav{
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};

            width: 100%;
            height: 5rem;

            margin-top: 1rem;

            display: flex;
            align-items: end;
        }

        .hide{
            display: none;
        }
    }
`

export const PaymentStep = Styled.div`
    width: 30rem;
    height: 3.5rem;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: end;

    position: relative;

    p{
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;

        width: 8rem;
        height: 3.5rem;

        display: grid;
        place-items: center
    }

    >div{
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.blue};

        border-radius: 0.3rem 0.3rem 0 0;

        position: absolute;

        transition: all 500ms;
    }

    .next{
        transform: translateX(22rem);
    }

            

`

export const Content = Styled.div`
    

    width: 28rem;
    height: 60rem;

    margin: 0 auto;
 
`

export const Navegation = Styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;

    position: absolute;
    bottom: 5rem;
    
`

export const FinishBuy = Styled.dialog`

`