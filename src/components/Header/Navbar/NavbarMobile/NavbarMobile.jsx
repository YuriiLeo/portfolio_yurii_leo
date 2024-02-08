import * as React from "react";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { NavigationList } from "./NavigationList";
import { MobileLangSwitch, Navigation } from "./NavbarMobile.styled";
import LanguageSwitcher from "../../../LanguageSwitcher/LanguageSwitcher";


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(25px at calc(100% - 40px) 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 50,
        },
        background: 'transparent',
    }
};

export const NavbarMobile = ({ navLinks }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <>
            <Navigation
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                variants={sidebar}
                isOpen={isOpen}
            >
                <NavigationList toggle={() => toggleOpen()} navLinks={navLinks} />
                <MobileLangSwitch>
                    <LanguageSwitcher />
                </MobileLangSwitch>
                <MenuToggle toggle={() => toggleOpen()} />
            </Navigation>
        </>
    );
};
