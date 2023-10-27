import Styled from "styled-components"

export const Container = Styled.div`
    font-family: 'Robot', sans-serif;

    width: 100%;

    margin-top: 2.5rem;
    margin-bottom: 3rem;

    >div{
        label{
            margin-top: 1rem;
            font-size: 1.2rem;
            font-weight: 600;

            display: block;
        }

        input{
            border: 1px solid ${({ theme }) => theme.colors.blue};

            width: 25rem;
            height: 2rem;
            
            margin: 0 0 0 3rem;
            
            outline: none;
        }

        div{

            display: flex;
            gap: 0 1.8rem;
            flex-wrap: wrap;

            .fone{
                display: grid;

                input{
                    width: 10rem;
                }
            }
        }
    }

    >hr{
        color:red;
        width: 15rem;
        margin: 3rem auto;
    }


`
