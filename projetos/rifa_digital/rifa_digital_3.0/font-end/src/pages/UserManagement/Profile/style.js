import Styled from "styled-components"

export const Container = Styled.div`
    width: 100%;

    main{
        position: relative;
        svg{
            position: absolute;
            bottom: 0
        }

        .foto{
            background-color: gray;
            width: 10rem;
            height: 10rem;

            border-radius: 50%;
            margin: 3rem auto 1.5rem;
        }

        h1{
            font-size: 2.4rem;
            font-weight: 400;

            text-align: center;
            margin-bottom: 4.2rem;
        }
    }



`

export const UserInfo = Styled.div`
    width: 30rem;

    margin: 0 auto;
    span{
        font-size: 1.2rem;
        font-weight: 400;
    }

    div{
        width: 25rem;
        height: 2rem;

        border: 1px solid ${({ theme }) => theme.colors.blue};
        margin: 0 4.4rem 1.8rem 2.5rem;

    }


`

export const Line = Styled.div`
    color: ${({ theme }) => theme.colors.blue};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin: 3.2rem auto 1.5rem;

    hr{
        width: 8rem;
        height: 0;
        border: 1px solid ${({ theme }) => theme.colors.blue};
    }

`

export const Password = Styled.div`
    width: 30rem;
    margin: 0 auto;
    
    label{
        display: block;

        font-size: 1.2rem;
        font-weight: 400;
    }

    input{
        width: 25rem;
        height: 2rem;

        border: 1px solid ${({ theme }) => theme.colors.blue};
        margin: 0 4.4rem 1.8rem 2.5rem;

        outline-color: ${({ theme }) => theme.colors.outline};
    }

`


