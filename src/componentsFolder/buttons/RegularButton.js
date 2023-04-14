//!This is the regular button of all components
import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import RegularText from "../texts/RegularText";
import RowContainer from "../containers/RowContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { primary, white } = colors;
const ButtonView = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${primary};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-raduis: 40px;
  height: 48px;
  margin-bottom: 20px;
  border-radius: 8px;
`;
const RegularButton = ({ color, icon, ...props }) => {
  return (
    <ButtonView {...props} onPress={props.onPress}>
      {!icon ? (
        <>
          <RegularText>{props.title}</RegularText>
          {props.children}
        </>
      ) : (
        <RowContainer>
          <RegularText>{props.title}</RegularText>

          <MaterialCommunityIcons
            style={{ marginLeft: 10 }}
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
