import Styled from "styled-components"

export const Container = Styled.div`
    position: relative;

    .hide{
        display: none;
    }
    
`;

export const Page = Styled.div`
    width: 100%;
    height: 100vh; 

    position: relative;

    >header{
        width: 100%;
        
        .login{
            display: flex;
            justify-content: end;

            svg{
                color: ${({  theme }) => theme.colors.blue};

                width: 2rem;
                height: 2rem;

                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
                margin-right: 0.5rem;

                cursor: pointer;
            }
        }
    }

    >main{
        display: grid;
        justify-content: center;
    }
`

export const Buy = Styled.div`
    background-color: ${({ theme }) => theme.colors.white};

    width: 100%;
    height: 5rem;

    border-top: 1px solid ${({ theme }) => theme.colors.blue};

    display: grid;
    place-items: center;

    .buttonActive{
        background-color: ${({ theme }) => theme.colors.blue};
        cursor: pointer;
        
        span{
            color: ${({ theme }) => theme.colors.white};
        }
        
        
    }


`

export const BodyPopUp = Styled.div`
    font-family: 'Roboto', sans-serif;
    
    background-color: ${({ theme }) => theme.colors.background};

    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;

    position: absolute;
    top: 0;

    h1{
        font-size: 1.6rem;
        font-weight: 600;
        margin: 1rem 0 1rem 0;
    }

    h2{
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }

`
export const SectionNumbers = Styled.div`
    width: 100%;
    >div{ 
        height: 23rem;
        

        display: flex;
        justify-content: center;
        gap: 2rem;
        
        flex-wrap: wrap;
        overflow-y: auto;

        .numberLuck{
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};

            width: 4rem;
            height: 4rem;

            border-radius: 0.3rem;

            display: grid;
            justify-content: end;
            align-items: end;

            padding: 0 0.5rem;

            cursor: pointer;

            >span{
                font-family: 'Roboto', sans-serif;
                font-size: 1.6rem;
                font-weight: 600;
            }

        }
        
    }
`