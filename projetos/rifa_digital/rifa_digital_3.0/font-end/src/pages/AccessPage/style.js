import Styled from "styled-components";

export const Container = Styled.div`
    font-family: 'Roboto', sans-serif;

    background-color: rgb(240,240,240);

    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;

    >main{
        position: relative;

        .infoTop{
            transform: translateY(-33rem);

            .login{
                transform: translatex(-30rem);
            }

            .sigUp{
                transform: translatex(-30rem);

            }
        }
    }
    
        
`

export const DataUser = Styled.div`
        background-color: ${({ theme }) => theme.colors.white};
        
        width: 30rem;

        border-radius: 0.5rem;

        display: grid;
        gap: 3rem;

        form{
            height: 30rem;

            display: grid;
            place-items: center;
            gap: 2rem;

            padding: 2rem;

            h2{
                font-size: 2.5rem;
            }

            input{
                padding: 1rem 2rem;
                outline-color: ${({ theme }) => theme.colors.outline};
                border: 1px solid ${({ theme }) => theme.colors.blue};
            }

            button{
                background-color: ${({ theme }) => theme.colors.blue};
                
                span{
                    color: ${({ theme }) => theme.colors.white};
                }
            }
        }

        
`

export const Information = Styled.div`
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};

    width: 30rem;
    height: 30rem;

    border-radius: 0.5rem;
    overflow-x: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;

    position: absolute;
    bottom: 0;
   
    transition: all 500ms;


    >div{
        width: 30rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        transition: all 500ms;

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

        button{
            width: 16rem;
        }
    }

`