import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./defaultThtme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setDarkThema,
  setDefaultThema,
} from "../redux/thema/themaSlice";

export const Theme = ({ children }) => {
  const thema = useSelector((state) => state.thema.thema);
  const dispatch = useDispatch();
  useEffect(() => {
    const key = window.localStorage.getItem("mode");
    if (key === "dark-mode") {
      dispatch(setDarkThema(true));
    }

    if (key === "light-mode") {
      dispatch(setDefaultThema(false));
    }
  });
  return (
    <ThemeProvider theme={thema ? darkTheme : defaultTheme}>
      {children}
    </ThemeProvider>
  );
};


Theme.propTypes = {
  children: PropTypes.node.isRequired,
};