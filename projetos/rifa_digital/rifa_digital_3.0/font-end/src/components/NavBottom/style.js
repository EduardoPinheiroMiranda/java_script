import Styled from "styled-components"

export const Container = Styled.div`
    background-color: ${({ theme }) => theme.colors.blue};

    width: 100%;
    height: 5rem;


    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 0;

    a{
        width: 4rem;
        height: 4rem;

        display: grid;
        place-items: center;
        
        border-radius: 50%;

        svg{
            color: ${({ theme }) => theme.colors.white};
            width: 2rem;
            height: 2rem;
        }
    }

    a:nth-child(1){
        margin-left: 3rem;
    }

    a:nth-child(3){
        margin-right: 3rem;

        position: relative;

        svg:nth-child(2){
            width: 1rem;
            height: 1rem;

            position: absolute;
            bottom: 0.5rem;
            right: 5px;
        }
    }

    .select{
        background-color: ${({ theme }) =>  theme.colors.white};
        opacity: 0;

        animation-name: navbarProfile;
        animation-duration: 500ms;
        animation-fill-mode: forwards;


        svg{
            color: ${({ theme }) => theme.colors.blue};
        }

    }

    

`