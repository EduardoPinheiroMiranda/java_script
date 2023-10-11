import styled from 'styled-components'

export const Container = styled.button`
    background: ${({ theme }) => theme.colors.white};

    width: 15rem;
    height: 3rem;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    cursor: pointer;

    >span{
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        color: ${({ theme }) => theme.colors.blue};

        display: flex;
        align-items: end;
        justify-content: center;
        gap: 1rem;
    }

`