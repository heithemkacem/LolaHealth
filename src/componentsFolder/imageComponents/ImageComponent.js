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
const ImageComponent = ({ src, width, height, ...props }) => {
  return (
    <IconBg style={{ ...props.style }}>
      <Image source={src} style={{ width: width, height: height }} />
    </IconBg>
  );
};

export default ImageComponent;
