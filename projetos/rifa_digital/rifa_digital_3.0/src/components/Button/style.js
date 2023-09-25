import styled from 'styled-components'

export const Container = styled.button`
    background: transparent;

    width: 15rem;
    height: 3rem;

    text-align: center;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.blue};

    >span{
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;

        color: ${({ theme }) => theme.colors.blue};
    }
    
`