//!This is the regular button of all components
import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import RegularText from "../texts/RegularText";
import RowContainer from "../containers/RowContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { primary, white } = colors;
const ButtonView = styled.TouchableOpacity`
  background-color: ${primary};
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 8px;
`;
const RegularButton = ({ color, icon, title, ...props }) => {
  return (
    <ButtonView {...props} onPress={props.onPress}>
      {!icon ? (
        <RowContainer>
          <RegularText>{title}</RegularText>
          {props.children}
        </RowContainer>
      ) : (
        <RowContainer>
          <RegularText>{title}</RegularText>
          <MaterialCommunityIcons
            style={{ marginLeft: 10, marginTop: 3 }}
            name={icon}
            size={19}
            color={white}
          />
          {props.children}
        </RowContainer>
      )}
    </ButtonView>
  );
};

export default RegularButton;
