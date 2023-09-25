import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    
    display: flex;
    justify-content: center;
    align-items: end;

    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};

    > h1{
        font-family: 'Black Han Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        
        line-height: normal;
        text-align: center;
        color: ${({ theme }) => theme.colors.blue};

        width: 8.9rem;
        height: 4rem;
    }

`