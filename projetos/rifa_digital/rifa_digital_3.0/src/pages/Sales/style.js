import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    .hide{
        display: none;
    }
    
`;

export const Page = styled.div`
    width: 100%;
    height: 100vh; 

    position: relative;

    

    >header{
        width: 100%;
        
        .login{
            display: flex;
            justify-content: end;

            svg{
                color: ${({  theme }) => theme.colors.blue};

                width: 2rem;
                height: 2rem;

                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
                margin-right: 0.5rem;
            }
        }
    }

    >main{
        display: grid;
        justify-content: center;
    }
`

export const Buy = styled.div`
    background-color: ${({ theme }) => theme.colors.white};

    width: 100%;
    height: 5rem;

    border-top: 1px solid ${({ theme }) => theme.colors.blue};

    display: grid;
    place-items: center;

    .buttonActive{
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
<<<<<<< HEAD

        cursor: pointer;
=======
>>>>>>> bc3bee9f412796dc127c5d65ebd2de240e86a4c7
    }


`