import { useState } from 'react'
import { useDispatch } from "react-redux";
import {
    setDarkThema,
    setDefaultThema,
} from "../../redux/thema/themaSlice";
import {
    MoonIcon,
    SunIcon,
} from "../../assets/Icons/Project";
import { DarkLight } from '../../components/Header/Navbar/Navbar.styled';

export default function ThemeToggle() {

    const [isDarkTheme, setIsDarkTheme] = useState(() => (window.localStorage.getItem("mode")) ?? "");

    const dispatch = useDispatch();

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);

        if (isDarkTheme) {
            dispatch(setDefaultThema());
            localStorage.setItem("mode", "light-mode");

        } else {
            dispatch(setDarkThema());
            localStorage.setItem("mode", "dark-mode");
        }
    };

    return (
        <DarkLight>
            <div onClick={toggleTheme}>
                {localStorage.getItem("mode") === 'dark-mode' ? <MoonIcon /> : <SunIcon />}
            </div>
        </DarkLight>
    );


}
