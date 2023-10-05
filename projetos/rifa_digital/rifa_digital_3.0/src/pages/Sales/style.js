import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh; 
    position: relative;

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

    >div:nth-child(5){
        position: absolute;
        top: 0;

        display: none;
    }

`;

export const Content = styled.div`

    display: grid;
    justify-content: center;
    
`

export const Description = styled.div`
    margin-bottom: 1.2rem;
    

    >div{
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 0.3rem;

        display: flex;
        align-items: center;

        width: 100%;
        height: 2.5rem;

        margin-bottom: 0.8rem;

        span{
            color: ${({ theme }) => theme.colors.white};
            font-family: 'Roboto', sans-serif;
            font-size: 1.4rem;
            font-weight: 600;

            padding: 0 1.4rem;
        }
    }

`

export const Section = styled.section`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    display: flex;
    gap: 0.5rem;


    >img{
        width: 12rem;
        height: 14rem;
    }

    >div{
        background-color: ${({ theme }) => theme.colors.gray_box};

        width: 17.5rem;
        height: 14rem;

        position: relative;

        p{
            padding: 0.2rem 0.8rem;
            margin-bottom: 0.4rem;
        }

        li{
            margin-left: 2rem;
        }

        >svg{
            color: ${({ theme }) => theme.colors.blue};

            position: absolute;
            top: 0.3rem;
            left: 90%;
        }
    }

`

export const SectionTickets = styled.div`
    width: 30rem;
    height: 43rem;

    overflow-y: auto;

    >div{
        display: flex;
        gap: 2.5rem;
        margin-bottom: 2rem;
        cursor: pointer;
    }
`

export const NextInfo = styled.div`

    display: flex;
    justify-content: center;
    gap: 0.8rem;

    position: absolute;
    bottom: 0.8rem;

    width: 100%;

    >svg{
        color: ${({ theme }) => theme.colors.gray_elips};

        width: 0.5rem;
        height: 0.5rem;

        cursor: pointer;
    }

    >svg:nth-child(1){
        color: ${({ theme }) => theme.colors.blue}
    }
`

export const Buy = styled.div`
    background-color: ${({ theme }) => theme.colors.white};


    width: 100%;
    height: 5rem;

    border-top: 1px solid ${({ theme }) => theme.colors.blue};

    display: grid;
    place-items: center;

    position: absolute;
    bottom: 0%;
    
`