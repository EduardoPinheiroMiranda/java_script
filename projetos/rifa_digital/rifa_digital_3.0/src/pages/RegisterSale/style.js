import Styled from "styled-components";

export const Container = Styled.div`
    font-family: 'Roboto' , sans-serif;

    position: relative;

    .hide{
        display: none;
    }
    
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

        transition: transform 300ms;
    }

    .nextStage{
        transform: translateX(22rem);
    }

            

`

export const Content = Styled.div`
    

    width: 30rem;
    height: 60rem;

    margin: 0 auto;
    
    overflow-x: hidden;

    display: grid;
    grid-template-columns: 1fr 1fr;

    .moveLeft{
        transform: translateX(-100rem);
    }

    .moveright{
        transform: translateX(-30rem);
    }

`

export const Navegation = Styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;

    position: absolute;
    bottom: 5rem;

    >.back{
        background-color: ${({ theme }) => theme.colors.blue};

        span{
            color: ${({ theme }) => theme.colors.white};
        }
        
    }

    >.next{
        background-color: ${({ theme }) => theme.colors.blue};
        span{
            color: ${({ theme }) => theme.colors.white};
        }
    }
    
`

export const FinishBuy = Styled.div`
    background-color: ${({ theme }) => theme.colors.background};

    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;

    display: grid;
    place-items: center;

    >div{
        background-color: ${({ theme }) => theme.colors.white};

        width: 30rem;
        height: 40rem;



        border-radius: 0.5rem;

        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;


        p{
            font-size: 1.6rem;
            font-weight: 400;
            text-align: center;
            
            margin-top: 2rem;
            width: 20rem;
        }

        button{
            background-color: ${({ theme }) => theme.colors.blue};

            margin-top: 5rem;

            span{
                color: ${({ theme }) => theme.colors.white};
            }
        
        }
    }
`