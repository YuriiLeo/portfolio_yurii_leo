import React from "react";
import {
  CSS3Icon,
  GitIcon,
  HTML5Icon,
  JavaScriptIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
} from "../../assets/Icons/Project";
import {
  IconLink,
  Icons,
  IconsWrapper,
} from "./IconList.styled";

export default function IconList() {
  return (
    <IconsWrapper>
      <Icons>
        <IconLink
          color="#F7DF1E"
          href="http://www.w3.org/2000/svg"
        >
          <JavaScriptIcon />
        </IconLink>
        <IconLink
          color="#E34F26"
          href="http://www.w3.org/2000/svg"
        >
          <HTML5Icon />
        </IconLink>
        <IconLink
          color="#1572B6"
          href="http://www.w3.org/2000/svg"
        >
          <CSS3Icon />
        </IconLink>
        <IconLink
          color="#61DAFB"
          href="http://www.w3.org/2000/svg"
        >
          <ReactIcon />
        </IconLink>
        <IconLink
          color="#339933"
          href="http://www.w3.org/2000/svg"
        >
          <NodeJSIcon />
        </IconLink>
        <IconLink
          color="#000000"
          href="http://www.w3.org/2000/svg"
        >
          <NextJSIcon />
        </IconLink>
        <IconLink
          color="#3178C6"
          href="http://www.w3.org/2000/svg"
        >
          <TypeScriptIcon />
        </IconLink>
        <IconLink
          color="#F05032"
          href="http://www.w3.org/2000/svg"
        >
          <GitIcon />
        </IconLink>
        <IconLink
          color="#764ABC"
          href="http://www.w3.org/2000/svg"
        >
          <ReduxIcon />
        </IconLink>
      </Icons>
    </IconsWrapper>
  );
}
