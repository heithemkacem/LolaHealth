//!This is the regular button of all components
import React from "react";
import { colors } from "../../styles/colors";
import RegularText from "../texts/RegularText";
import RowContainer from "../containers/RowContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { primary, white } = colors;
import { TouchableOpacity } from "react-native";

const RegularButton = ({ color, icon, title, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={[
        props.style,
        {
          backgroundColor: primary,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: 48,
          borderRadius: 8,
        },
      ]}
    >
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
    </TouchableOpacity>
  );
};

export default RegularButton;
