import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;

    background-color: rgb(240,240,240);

    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;

    >main{
        background-color: ${({ theme }) => theme.colors.white};
        width: 30rem;

        border-radius: 0.5rem;

        display: grid;
        gap: 3rem;

        position: relative;

        .top{
            position: absolute;
            top: 0;
        }

        .botton{
            position: absolute;
            bottom: 0;
        }
    }

    > main form{
        height: 30rem;

        display: grid;
        place-items: center;
        gap: 2rem;

        padding: 2rem;;

        h2{
            font-size: 2.5rem;
        }

        input{
            padding: 1.5rem;
        }

        Button{
            background-color: ${({ theme }) => theme.colors.blue};
            
            span{
                color: ${({ theme }) => theme.colors.white};
            }
        }
    }
    

`

export const Information = styled.div`

    >div{
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};

        width: 100%;
        height: 31rem;
        border-radius: 0.5rem;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;


        h2{
            font-size: 2.5rem;
            margin-bottom:3rem
        }

        p{
            font-size:1.6rem;
            text-align: center;
            padding: 0 1rem;
            margin-bottom: 3rem;
        }

        span{
            font-size:1.4rem;
            margin-bottom: 3rem;
        }
    }

    .hide{
        display: none;
    }

`
export const LogIn = styled.div`
    

`
export const SignUp = styled.div`    

`
