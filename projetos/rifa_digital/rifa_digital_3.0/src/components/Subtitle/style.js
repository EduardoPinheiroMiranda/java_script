import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;

    display: flex;
    margin-bottom: 1rem;

    >div{
        width: 10rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        


        span{
            background-color: ${({ theme }) => theme.colors.gray_box};
            font-size: 0.8rem;
            font-weight: 600;
            
            width: 2.25rem;
            height: 1rem;
            text-align: center;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        p{
            color: ${({ theme }) => theme.colors.white};
            font-size: 1rem;
            font-weight: 600;
            height: 1rem;

            display: flex;
            align-items: center;

        }
    }

    >div:nth-child(1){
        background-color: ${({ theme }) => theme.colors.green};
    }

    >div:nth-child(2){
        background-color: ${({ theme }) => theme.colors.orange};
    }

    >div:nth-child(3){
        background-color: ${({ theme }) => theme.colors.gray_button};
    }

`