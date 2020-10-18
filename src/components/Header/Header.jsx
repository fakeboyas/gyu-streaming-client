import React from "react";
import styled from "styled-components";
import Logo from "./parts/Logo";
import Menu from "./parts/Menu";
import Search from "./parts/Search";

function Header() {
    const Wrapper = styled.div``;

    return (
        <Wrapper className="d-flex m-3 navbar-fixed-top flex-row align-items-center">
            <Logo />
            <Menu />
            <Search />
        </Wrapper>
    );
}

export default Header;
