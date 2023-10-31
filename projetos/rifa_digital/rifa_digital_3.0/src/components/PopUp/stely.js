import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;

    background-color: ${({ theme }) => theme.colors.white};

    width: 25rem;
    height: 35rem;

    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    text-align: center;
    
    text-align: center;
    
    position: relative;
    
    >svg{
        color: ${({ theme }) => theme.colors.red};

        width: 1em;
        height: 1rem;

        position: absolute;
        top: 1rem;
        right: 1rem;

        cursor: pointer;
    }

    button{
            background-color: ${({ theme }) => theme.colors.blue};

            position: absolute;
            bottom: 1rem;
            left: 5rem;

            cursor: pointer;

            span{
                color: ${({ theme }) => theme.colors.white};
            }
    }
    
        

    
`
