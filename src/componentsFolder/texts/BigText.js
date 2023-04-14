import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
const { black } = colors;
const StyledText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: ${black};
  text-align: left;
`;
const BigText = (props) => {
  return (
    <StyledText {...props}>
      {props.children}
      {props.text}
    </StyledText>
  );
};

export default BigText;
