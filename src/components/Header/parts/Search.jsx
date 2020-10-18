import React from "react";
import styled from "styled-components";

function Search() {
    const Wrapper = styled.div`
        width: 25%;
    `;
    return (
        <Wrapper className="d-flex flex-row justify-content-around">
            <div className="search btn d-flex w-25 justify-content-around align-items-center">
                <span> Cari </span>
                <i className="fa fa-search" aria-hidden="true"></i>
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
