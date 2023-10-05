import styled from "styled-components";

export const Container = styled.div`

        background-color: ${({ theme }) => theme.colors.gray_button};
        color: ${({ theme }) => theme.colors.white};

        width: 4rem;
        height: 4rem;

        border-radius: 0.3rem;

        display: grid;
        justify-content: end;
        align-items: end;

        padding: 0 0.5rem;

        >span{
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 600;
        }
  
`

