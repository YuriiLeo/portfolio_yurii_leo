import React, { useState, useEffect } from "react";

import { StyledIcon, Wrapper } from "./ScrollToTop.styled";

export const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        })

    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',

        })
    }


    return (
        <>
            {showScrollTopButton &&
                <Wrapper >
                    <StyledIcon onClick={scrollTop} />
                </Wrapper>}
        </>
    )
};
