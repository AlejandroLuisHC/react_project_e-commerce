import styled from "styled-components";

export const MainLanding = styled.main`
    margin-top: 20px;
    grid-column: 1 / span 3;
    display: grid;
    grid-template: 1fr 250px / 1fr 6fr 1fr;
    margin-bottom: -15px;
`

export const DivWelcome = styled.div`
    border: 3px solid rgb(255, 67, 75, .4);
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    color: #eee;
    box-shadow: 0 0 10px #00000088;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImgCarousel = styled.img`
    object-fit: cover;
    height: 250px;
    object-position: 50% 20%;
    box-shadow: 0 0 10px black;
`

export const ButtonExploreBands = styled.button`
    transition: 300ms;

    &:hover {
        transform: scale(1.2)
}
`

export const SectionWelcome = styled.section`
    grid-column: 2;
    display: flex;
    justify-content: space-evenly;
    gap: 2vw;
    margin-bottom: 20px;
` 


