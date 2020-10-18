import React from "react";
import styled from "styled-components";

function Menu() {
    const Wrapper = styled.div`
        width: 50%;
    `;
    return (
        <Wrapper className="d-flex flex-row align-items-center justify-content-around ">
            <span>Drama korea</span>
            <span>Drama Jepang</span>
            <span>Drama Asia</span>
            <span>Film</span>
        </Wrapper>
    );
}

export default Menu;
