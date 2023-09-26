import styled from 'styled-components'
import backgroundimg from '../../assets/background-img.jpeg'

export const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;

`

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    >h1{
        font-size: 4rem;
        color: ${({ theme }) => theme.colors.orange};

    }

    >h2{
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    >p{
        font-size:1.4rem;
        color: ${({ theme }) => theme.colors.gray_100};
    }

    >a{
        margin-top: 12.4rem;
        color: ${({ theme }) => theme.colors.orange};

    }

    ;
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundimg}) no-repeat center ;
    background-size: cover;
`