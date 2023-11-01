import Styled from "styled-components";

export const Container = Styled.div`

    width: 30rem;
    height: 43rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    overflow: auto;
    margin-bottom: 2.2rem;

    .selectNumber{
        background-color: ${({ theme }) => theme.colors.blue};
    }

    .sold{
        background-color: ${({ theme }) => theme.colors.green};
        cursor: auto;
    }

    .reserved{
        background-color: ${({ theme }) => theme.colors.orange};
        cursor: auto;
    }
`

