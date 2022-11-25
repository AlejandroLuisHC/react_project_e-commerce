import styled from "styled-components";

export const MainManagement = styled.main`
    grid-column: 2;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 9fr;
`
export const DivManagerWindow = styled.div`
    border: 3px solid rgb(255, 67, 75, .7);
    margin-left: 30px;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    background-color: #ddd;
    color: black;
    box-shadow: 0 0 10px #00000088;
    display: grid;
    gap: 20px;
    grid-template: 60px 1fr / 1fr 3fr;
    max-height: 800px;
`
export const OlOrders = styled.ol`
    grid-row: 2;
    grid-column: 1;
    max-height: 100%;
    overflow-y: auto;
`
export const SectionOrderInfo = styled.section`
    grid-row: 1 / span 2;
    grid-column: 2;
    display: grid;
    grid-template: 60px 1fr / 1fr 1fr;
    gap: 10px;
    border-left: 2px solid rgb(255, 67, 75, .7);
    padding-left: 20px;
`
export const DivOrdersFilter = styled.div`
    grid-column: 1;
    padding-bottom: 10px;
`
export const DivTitleOrder = styled.div`
    grid-column: 1 / span 2;
`
export const DivBtnState = styled.div`
    grid-column: 1 / span 2;
    display: grid;
    padding: 30px;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`