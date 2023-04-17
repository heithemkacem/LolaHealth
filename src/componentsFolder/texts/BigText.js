import React from "react";
import { colors } from "../../styles/colors";
import { Text } from "react-native";
const { black } = colors;

const BigText = (props) => {
  return (
    <Text
      style={[{ fontWeight: 700, fontSize: 20, color: black }, props.style]}
      {...props}
    >
      {props.children}
      {props.text}
    </Text>
  );
};

export default BigText;
