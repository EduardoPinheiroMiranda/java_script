import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto' , sans-serif;

    width: 100%;
    height: 100vh;

    >main {
        nav{
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};

            width: 100%;
            height: 5rem;

            margin-top: 1rem;

            display: flex;
            justify-content: center;
            align-items: end;
            gap: 11rem;

            position: relative;

            p{
                font-size: 1.2rem;
                font-weight: 600;
                text-align: center;
                width: 8rem;
                height: 3.5rem;

                display: grid;
                place-items: center;
            }

            div{
                background-color: ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.blue};

                width: 10rem;
                height: 3.5rem;

                border-radius: 0.3rem 0.3rem 0 0;

                display: grid;
                place-items: center;
    
                position: absolute;
                left: 7%;

                p{
                    font-size: 1.2rem;
                    font-weight: 600;
                    text-align: center;

                    width: 8rem;
                }
            }

            .next{
                position: absolute;
                left: 62%;
            }
        }

    }
    
`

export const Content = styled.div`
    
`