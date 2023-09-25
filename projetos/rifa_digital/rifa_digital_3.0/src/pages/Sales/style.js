import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    >header{
        width: 100%;
        height: 3rem;

        display: flex;
        align-items: center;

        position: relative;

        svg{
            color: ${({ theme }) => theme.colors.blue};

            width: 2rem;
            height: 2rem;

            position: absolute;
            left: 93%;

        }
    }

`;

export const Content = styled.div`
    width: 30rem;
    
`

export const Buy = styled.div`
    width: 100%;
    height: 5rem;

    border: 1px solid ${({ theme }) => theme.colors.blue};

    display: grid;
    place-items: center;

    
`