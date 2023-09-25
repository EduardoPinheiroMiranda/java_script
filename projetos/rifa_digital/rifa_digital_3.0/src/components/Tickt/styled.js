import styled from 'styled-components'

export const Container = styled.div`

    width: 30rem;
    height: 49.5rem;

    overflow-y: auto;

    >.ticketLine{
        display: flex;
        gap: 2.5rem;
        margin-bottom:2.5rem;
        cursor: pointer;

        .ticket{
            background-color: ${({ theme }) => theme.colors.gray_button};
            color: ${({ theme }) => theme.colors.white};

            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 600;

            width: 4rem;
            height: 4rem;

            border-radius: 0.3rem;

            display: grid;
            justify-content: end;
            align-items: end;

            padding: 0 0.5rem;
        }
    }

`