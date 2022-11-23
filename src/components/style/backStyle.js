import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkBack = styled(Link)`
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 20px;
`

export const ButtonHome = styled.button`
    height: 50px;
    width: 200px;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, .4);
    border: none
`