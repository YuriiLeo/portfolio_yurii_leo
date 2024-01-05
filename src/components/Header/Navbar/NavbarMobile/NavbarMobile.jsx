import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { NavigationList } from "./NavigationList";
import { Background, Navigation } from "./NavbarMobile.styled";


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
        clipPath: "circle(0px at calc(100% - 40px) 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 50
        }
    }
};

export const NavbarMobile = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.div>
            <Navigation
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <Background className="background" variants={sidebar} />
                <NavigationList toggle={() => toggleOpen()} />
                <MenuToggle toggle={() => toggleOpen()} />
            </Navigation>
        </motion.div>
    );
};
