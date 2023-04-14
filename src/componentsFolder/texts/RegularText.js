import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
const { white } = colors;
const StyledText = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: ${white};
  text-align: center;
`;
const SmallText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default SmallText;
