import styled from 'styled-components'

export const Container = styled.button`
    background: ${({ theme }) => theme.colors.white};
    
    width: 15rem;
    height: 3rem;

    text-align: center;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.blue};

    cursor: pointer;

    >a{
        text-decoration: none;
        
        span{
            color: ${({ theme }) => theme.colors.blue};
            
            font-size: 1.6rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 600;

            padding: 0 4.2rem;
            
        }

    }
    
`