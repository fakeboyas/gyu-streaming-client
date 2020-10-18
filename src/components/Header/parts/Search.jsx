import React, { useState } from "react";
import styled from "styled-components";

function Search(props) {
    const Wrapper = styled.div`
        width: 25%;
        .search-open {
            display: ${props.toggle.open};
        }

        .search-close {
            display: ${props.toggle.close};
        }
    `;

    return (
        <Wrapper className="d-flex flex-row justify-content-around">
            <div
                onClick={props.handleOpenSearch}
                className="search-open btn text-light"
            >
                <span>
                    Cari <i className="fa fa-search" aria-hidden="true"></i>
                </span>
            </div>
            <div
                onClick={props.handleCloseSearch}
                className="search-close btn text-light"
            >
                <span>
                    {" "}
                    Cari
                    <i className="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>

            <div className="d-flex flex-row align-items-center">
                <div className="btn btn-primary rounded-pill">
                    <span>Masuk Akun / Daftar</span>
                </div>
            </div>
        </Wrapper>
    );
}

export default Search;
