import styled from "styled-components";

export const Container = styled.input`
    background-color: ${({ theme }) => theme.colors.white};

    width: 25rem;
    height: 2rem;

    border: 1px solid ${({ theme }) => theme.colors.blue};
    padding: 0.8rem;
    outline: none;

`