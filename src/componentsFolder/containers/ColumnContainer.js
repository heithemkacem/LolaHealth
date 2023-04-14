//!This container give a row flex display of his childrens and space between them
import React from "react";
import styled from "styled-components/native";
const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  padding: 15px;
`;
const ColumnContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default ColumnContainer;
