import Styled from "styled-components"

export const Container = Styled.div`
    min-width: 36rem;

    >main{
        width: 30rem;

        margin: 0 auto;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .logOof{
            color: ${({ theme }) => theme.colors.blue};

            width: 2rem;
            height: 2rem;
           
            margin: 0.5rem 0.5rem 0.5rem 29.5rem;
        }

        h1{
            font-size: 2.4rem;
            font-weight: 400;

            text-align: center;
            margin-bottom: 4.2rem;
        }

        button{
            background-color: ${({ theme }) => theme.colors.blue};
            
            margin: 0 auto;

            span{
                color: ${({ theme }) => theme.colors.white};
                font-size: 1.4rem;
                font-weight: 400;
            }
        }

        button:hover{
            background-color: ${({ theme }) => theme.colors.buttonHouver};
        }
    }

`

export const Avatar = Styled.div`

    display: grid;
    justify-content: center;

    position: relative;

    margin: 0.5rem auto 1.5rem;
    

    >img{
        width: 10rem;
        height: 10rem;

        border-radius: 50%;
        margin: 0 auto;
    }

    >label{
        color: ${({ theme }) => theme.colors.blue};

        width: 2rem;
        height: 2rem;

        border-radius: 50%;

        display: grid;
        place-items: center;

        margin-top: -1.5rem;
        margin-left: 8rem;

         svg{
            width: 2rem;
            height: 2rem;
        }
    }

    >input{
        display: none;
    }

`

export const UserInfo = Styled.div`
    width: 100%;

    margin: 0 auto;
    span{
        font-size: 1.2rem;
        font-weight: 400;
    }

    div{
        width: 25rem;
        height: 2rem;
        
        padding: 0 1rem;

        border: 1px solid ${({ theme }) => theme.colors.blue};
        margin: 0 4.4rem 1.8rem 2.5rem;

        display: flex;
        align-items: center;

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
    width: 100%;
    margin: 0 auto 3rem;
    
    div{
        position: relative;

        label{
            display: block;

            font-size: 1.2rem;
            font-weight: 400;
        }

        input{
            width: 25rem;
            height: 2rem;

            padding: 0 1rem;

            border: 1px solid ${({ theme }) => theme.colors.blue};
            margin: 0 4.4rem 1.8rem 2.5rem;

            outline-color: ${({ theme }) => theme.colors.outline};
        }

        .showPassword{
            color: ${({ theme }) => theme.colors.blue};

            position: absolute;
            top: 1.7rem;
            right: 3rem;
            
            svg{
                width: 1.5rem;
                height: 1.5rem;

                cursor: pointer;
            }

            .hide{
                display: none;
            }
        }
    }
    

`


