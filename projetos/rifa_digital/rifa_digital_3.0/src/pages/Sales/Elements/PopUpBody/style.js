import Styled from "styled-components";

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.background};

    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;

    position: absolute;
    top: 0;
`