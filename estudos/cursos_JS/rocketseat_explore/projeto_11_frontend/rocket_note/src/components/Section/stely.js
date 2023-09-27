import styled from 'styled-components'

export const Component = styled.section`
    margin: 5.6rem 0 2.8rem;

    >h2{
        border-bottom-width: 0.1rem;
        border-bottom-style: solid;
        border-color: ${({ theme}) => theme.colors.background_700};
        padding-bottom: 1.6rem;
        margin-bottom: 2.4rem;

        color: ${({ theme }) => theme.colors.gray_100};
        font-size: 2rem;
        font-weight: 400;
    }

`