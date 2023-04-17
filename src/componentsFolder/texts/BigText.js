import React from "react";
import { colors } from "../../styles/colors";
import { Text } from "react-native";
const { black } = colors;

const BigText = (props) => {
  return (
    <Text
      style={{ fontWeight: 700, fontSize: 18, color: black, textAlign: "left" }}
      {...props}
    >
      {props.children}
      {props.text}
    </Text>
  );
};

export default BigText;
