import styled from 'styled-components'

export const Component = styled.button`
    background: none;
    color: ${({ theme, isActived }) => isActived ? theme.colors.orange :  theme.colors.gray_100};
    border: none;
    font-size: 1.6rem;
`