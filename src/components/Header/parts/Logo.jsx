import React from "react";
import logo from "../../../assets/images/icons/logo/logo-gyu.png";
import styled from "styled-components";

function Logo() {
    const Wrapper = styled.div`
        width: 20%;
        img {
            width: 40%;
        }
    `;

    return (
        <Wrapper className="d-flex align-items-center justify-content-center">
            <span>Logo</span>
        </Wrapper>
    );
}

export default Logo;
