import Styled from "styled-components"

export const Container = Styled.div`
    font-family: 'Robot', sans-serif;

    width: 30rem;
    height: 60rem;

    margin-top: 2.5rem;
    margin-bottom: 3rem;

    transition: transform 300ms;


    
    .hide{
        display: none;
    }

    

`

export const Content = Styled.div`
    >div{
        label{
            margin-top: 1rem;
            font-size: 1.2rem;
            font-weight: 600;

            margin-bottom: 0.5rem;

            display: block;
        }

        input{
            border: 1px solid ${({ theme }) => theme.colors.blue};

            width: 25rem;
            height: 2rem;
            
            margin: 0 0 0 3rem;
            
            outline-color: ${({ theme }) => theme.colors.outline};
        }

        div{

            display: flex;
            gap: 0 1.8rem;
            flex-wrap: wrap;

            .info{
                display: grid;

                input{
                    width: 10rem;
                }
            }
        }
    }

    >hr{
        
        border: 1px solid ${({ theme }) => theme.colors.blue};
        width: 15rem;
        margin: 3rem auto;
    }

`