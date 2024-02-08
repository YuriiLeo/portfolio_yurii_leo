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
  IconWrapper,
  Icons,
  IconsWrapper,
} from "./IconList.styled";

export default function IconList() {
  return (
    <IconsWrapper>
      <Icons>
        <IconWrapper
          color="#F7DF1E"
        >
          <JavaScriptIcon />
        </IconWrapper>
        <IconWrapper
          color="#E34F26"
        >
          <HTML5Icon />
        </IconWrapper>
        <IconWrapper
          color="#1572B6"
        >
          <CSS3Icon />
        </IconWrapper>
        <IconWrapper
          color="#61DAFB"
        >
          <ReactIcon />
        </IconWrapper>
        <IconWrapper
          color="#339933"
        >
          <NodeJSIcon />
        </IconWrapper>
        <IconWrapper
          color="#000000"
        >
          <NextJSIcon />
        </IconWrapper>
        <IconWrapper
          color="#3178C6"
        >
          <TypeScriptIcon />
        </IconWrapper>
        <IconWrapper
          color="#F05032"
        >
          <GitIcon />
        </IconWrapper>
        <IconWrapper
          color="#764ABC"
        >
          <ReduxIcon />
        </IconWrapper>
      </Icons>
    </IconsWrapper>
  );
}
