import Styled from "styled-components"

export const Container = Styled.div`
    font-family: "Roboto", sans-serif;
    
    width: 100%;
    height: 60rem;

    overflow: auto;

        hr{
            border: 1px solid ${({ theme }) => theme.colors.blue};
            width: 15rem;

            margin: 1.5rem auto;
        }

    .hide{
        display: none;
    }

`

export const InfoRaffle = Styled.div`
    >h1{
        font-size: 1.6rem;
        font-weight: 800;

        margin-top: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    >div{
        display: flex;

        img{
            width: 7rem;
            height: 7rem;
            margin-right: 1rem;
        }

        div{
            width: 100%;   

            p{
                margin-bottom: 0.7rem;
                font-size: 1.2rem;
                font-weight: 400;

                span{
                    margin-left: 1rem;
                }
            }
        }
    }
`

export const InfoUser = Styled.div`
    p{
        margin-bottom: 0.7rem;
        font-size: 1.2rem;
        font-weight: 400;

        span{
            margin-left: 1rem;
        }
    }
`

export const Payment = Styled.div`
    >h2{
        font-size: 2rem;
        font-weight: 600;
    }

    >div:nth-child(2){
        display: grid;
        justify-content: center;

        p{
            font-size: 2rem;
            font-weight: 600;

            text-align: center;
            margin-top: 2rem;
        }
        
        img{
            width: 20rem;
            height: 20rem;
            text-align: center;
        }
    }
    
    >div:nth-child(3){
        
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 2rem;
        margin-bottom: 5rem;

        p{
            font-size: 1.2rem;
            font-weight: 600;

            margin-right: 0.5rem;
            text-align: center;

        }
        
        div{
            width: 15rem;
            height: 2rem;

            padding: 0.2rem 1rem;

            overflow-x: auto;
                
            border: 1px solid ${({ theme }) => theme.colors.blue};

            span{
                font-size: 1.2rem;
                font-weight: 400;
                text-align: center;
            }
        }
        svg{
            width: 2rem;
            height: 2rem;
        }

    }
    
`

