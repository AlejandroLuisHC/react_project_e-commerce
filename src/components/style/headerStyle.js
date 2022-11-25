import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-column: 1 / span 3;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .7);
`
export const DivNavGrid = styled.div`
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15vw 0 40px;
`
export const DivCarousel = styled.div`
    max-height: 210px;
`
export const ImgHero = styled.img`
    max-height: 210px;
    object-fit: cover;
    object-position: 50% 64%;
`
export const H1Hero = styled.h1`
    font-size: 3.2vw;
    font-weight: bold;
    color: #eee;
    text-shadow: 1px 1px 8px black;
`
export const PHero = styled.p`
    font-size: 1.2em;
    font-weight: normal;
    font-style: italic;
    color: #eee;
    text-shadow: 1px 1px 8px black;
`
export const InputSearch = styled.input`
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, .4);
    border: none;
`
export const ButtonSearch = styled.button`
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, .4);
    border: none;
`
export const LinkProfile = styled(Link)`
    color: #eee;
    text-decoration: none;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    gap: 8px;
`
export const SpanProfile = styled.span`
    font-size: 30px;
`
export const ButtonCart = styled.button`
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, .4);
    font-size: 20px;
    color: #eee;
    border: none;
`
export const LiCart = styled.li`
    display: flex;
    align-items: center;
    font-size: 16px;
`
export const ButtonQuantity = styled.button`
    box-shadow: inset 1px 1px 4px rgba(0, 0, 0, .4);
    border: none;
    padding: 0 5px;
    color: #eee;
    width: 20px;
    height: 20px;
    font-size: 13px;
    border-radius: 5px;
    background-color: rgb(136, 137, 145);
    cursor: pointer;
`
export const LinkManager = styled(Link)`
    color: #eee;
    text-decoration: none;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    gap: 8px;
`
