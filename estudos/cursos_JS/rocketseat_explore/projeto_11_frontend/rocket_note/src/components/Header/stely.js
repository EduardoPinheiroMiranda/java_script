import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Component = styled.header`
    grid-area: header;

    height: 10.5rem;
    width: 100%;

    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme}) => theme.colors.background_700};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 8rem;

`;

export const Perfil = styled(Link)`
    display: flex;
    align-items: center;

    > img{
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    > div{
        display: grid;
        margin-left: 1.6rem;
        line-height: 2.4rem;

        span{
            font-size: 1.6rem;
            color: ${({ theme }) => theme.colors.gray_100};
        }

        strong{
            font-size: 1.8rem;
            color: ${({ theme}) => theme.colors.white}
        }
    }



`

export const Logout = styled.div`
    border: none;
    background: none;

    >svg{
        color:${({ theme }) => theme.colors.gray_100};
        font-size: 2.4rem;

        cursor: pointer;
    }

`