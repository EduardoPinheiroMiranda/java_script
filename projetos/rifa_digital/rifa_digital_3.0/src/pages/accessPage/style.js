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

        border-radius: 0.3rem;

        display: grid;
        gap: 3rem;
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

export const LogIn = styled.form`

    

`

export const SingIn = styled.form`

`