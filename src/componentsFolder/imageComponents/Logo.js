//!Logo Component
import React from "react";
import styled from "styled-components/native";
import { ScreenHeight } from "../../util/shared";
import { Image } from "react-native";
const IconBg = styled.View`
  height: ${ScreenHeight * 0.25}px;
  justify-content: center;
  align-items: center;
`;
const Logo = ({ src, ...props }) => {
  return (
    <IconBg style={{ ...props.style }}>
      <Image source={src} style={{ width: 149, height: 91 }} />
    </IconBg>
  );
};

export default Logo;
