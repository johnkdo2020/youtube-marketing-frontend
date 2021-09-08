import React from 'react'
import styled from "styled-components"
import BottomHeader from './BottomHeader';
import TopHeader from './TopHeader';

const HeaderBlockContainer = styled.div`

    width: 1080px;
    height: 150px;
    /* background: gray; */
    outline: none;
    border: none;

`;


const HeaderBlock = () => {
    return(
            <HeaderBlockContainer>
                <TopHeader />
                <BottomHeader />
            </HeaderBlockContainer>

    )
}
export default HeaderBlock