//!This is the regular button of all components
import React from "react";
import { colors } from "../../styles/colors";
import RegularText from "../texts/RegularText";
import RowContainer from "../containers/RowContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { primary, white } = colors;

const RegularButton = ({ color, icon, title, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={[
        props.style,
        {
          width: "100%",
          height: 48,
        },
      ]}
    >
      <LinearGradient
        colors={["rgba(255, 140, 33, 1)", "rgba(255, 97, 33, 1)"]}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={[
          {
            width: "100%",
            height: "100%",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
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
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default RegularButton;
