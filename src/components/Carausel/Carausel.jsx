import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function Carausel() {
    const Wrapper = styled.div`
        img {
            max-height: 100vh;
            min-width: 100vw;
        }
    `;
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1165606154/d-1"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1165786765/d-1"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1165797258/d-1"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1165796835/d-1"
                        alt=""
                    />
                </div>
            </Slider>
        </Wrapper>
    );
}

export default Carausel;
