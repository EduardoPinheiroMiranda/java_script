import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto' , sans-serif;

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

    >footer{
        width: 100%;

        display: flex;
        justify-content: space-around;

        position: absolute;
        bottom: 5rem;
    }
    
`

export const PaymentStep = styled.div`
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

export const Register = styled.form`
    margin-top: 8.6rem;
    display: grid;
    place-items: center;

    >label{
        font-size: 1.2rem;
        font-weight: 600;

        width: 9rem;
        height: 2rem;

        margin: 0 23rem 0 4rem;


        display: block;
        display: flex;
        align-items: center;
    }

    >input{
        margin: 0 4rem 2rem 7rem;
    }
    
`

export const ConfirmSale = styled.div`
    width: 100%;

    display: grid;

    align-items: center;
    place-items: center;


    >h2{
        font-size: 2rem;
        font-weight: 600;

        margin-top: 12.7rem;
    }

    >img{
        width: 20rem;
        height: 20rem;

        margin-bottom: 5rem;
    }

    >div{
        
        font-size: 1.2rem;
        font-weight: 600;

        display: flex;
        align-items: center;
        gap: 0.5rem;

       

        div{
            font-weight: 400;

            width: 20rem;
            height: 2rem;
            padding: 0 1rem;

            display: flex;
            align-items: center;

            overflow: auto;

            border: 1px solid ${({ theme }) => theme.colors.blue};
        }

        svg{
            height: 2rem;
            width: 2rem;
        }
    }



`