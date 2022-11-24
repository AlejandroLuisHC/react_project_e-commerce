import styled from "styled-components";

export const MainBanAlbu = styled.main`
    margin-top: 15px;
    grid-column: 2;
    display: grid;
    grid-template: 50px 1fr / 1fr;
`
export const SectionBandsAlbums = styled.section`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 30px;
`
export const DivUtilities = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
export const ImgAlbum = styled.img`
    object-fit: cover;
    border-radius: 50%;
    transition: 10s;
`
export const DivAlbum = styled.div`
    border: none;
    border-radius: 50%;
    box-shadow: 2px 2px 8px rgb(0, 0, 0);
    cursor: pointer;
    &:hover ${ImgAlbum} {
        transform: rotate(360deg)
    }
`
export const SpanPriceTag = styled.span`
    font-weight: bold;
    box-shadow: 0 0 15px black;
    transform: rotate(-10deg);
`
export const ButtonBuy = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    left: 75%;
    border: none;
    box-shadow: 0 0 15px black;
`
export const ButtonWish = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    left: 65%;
    top: -7%;
`

export const DivBand = styled.div`
    width: 400px;
    height: 200px;
    border: none; 
    border-radius: 10px;
    box-shadow: 2px 2px 8px black;
    cursor: pointer;
`
export const ImgBand = styled.img`
    height: 200px;
    object-fit: cover;
    border-radius: 9px;
    object-position: 50% 15%;
`
export const ButtonInfo = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 9px 0 15px;
    position: absolute;
    left: 90%;
    border: none;
    box-shadow: inset 3px -3px 5px rgba(0, 0, 0, .5);
    background-color: #bbb;
`
export const H2 = styled.h2`
    color: #eee;
    font-size: 48px;
    font-weight: bold;
    text-shadow: 0 0 15px black;
`

export const ImgModalAlbum = styled.img`
    border-radius:  10px;
    margin-bottom: 15px;
    opacity: .3;
`
export const ImgModalBand = styled.img`
    border-radius:  10px;
    margin-bottom: 15px;
    box-shadow: 1px 1px 10px black;
`
export const DivModalBody = styled.div`
    text-align: justify;
    text-justify: inter-word;
`
export const PModalContent = styled.p` 
    position: absolute;
    padding: 0 40px 0 15px;
    font-size: 1.1em;
    white-space: pre-line;
    line-height: 1.6;
    top: 5%;
`
export const IFrameVideoclip = styled.iframe`
    border-radius: 10px;
    width: 100%;
    height: 412px;
`

