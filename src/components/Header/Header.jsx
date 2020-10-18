import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./parts/Logo";
import Menu from "./parts/Menu";
import Search from "./parts/Search";

function Header() {
    const [toggle, setToggle] = useState({ open: "flex", close: "none" });

    const Wrapper = styled.div`
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.65) 8%,
            rgba(0, 0, 0, 0.65) 9%,
            transparent 93%
        );

        .tab-search {
            display: ${toggle.close} !important;
        }

        @media only screen and (max-width: 500px) {
        }

        @media only screen and (max-width: 768px) {
        }

        @media only screen and (max-width: 1024px) {
        }
    `;
    const handleOpenSearch = (e) => {
        e.preventDefault();
        setToggle({ open: "none", close: "flex" });
    };

    const handleCloseSearch = (e) => {
        e.preventDefault();
        setToggle({
            open: "flex",
            close: "none",
        });
    };

    return (
        <Wrapper className="d-flex p-3 fixed-top flex-column align-items-center">
            <div className="d-flex w-100 flex-row align-items-center font-weight-bold text-light ">
                <Logo />
                <Menu />
                <Search
                    toggle={toggle}
                    handleOpenSearch={handleOpenSearch}
                    handleCloseSearch={handleCloseSearch}
                />
            </div>
            <div className="w-100 tab-search d-flex flex-row justify-content-center align-items-center mt-3">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input className=" w-75 form-control rounded-pill" />
            </div>
        </Wrapper>
    );
}

export default Header;
