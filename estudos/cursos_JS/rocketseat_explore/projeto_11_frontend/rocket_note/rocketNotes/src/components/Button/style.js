import styled from 'styled-components'

export const Container = styled.button`

    background-color: ${({theme}) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.background_800};
    font-family: 'Roboto Slab', serif;

    font-size: 1.6rem;

    width: 100%;
    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }


`;