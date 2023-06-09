import React from "react";
import { colors } from "../../styles/colors";
import { Text } from "react-native";
const { white } = colors;

const RegularText = (props) => {
  return (
    <Text
      style={[
        props.style,
        {
          fontWeight: 700,
          fontSize: 15,
          color: white,
          textAlign: "center",
        },
      ]}
      {...props}
    >
      {props.children}
      {props.text}
    </Text>
  );
};

export default RegularText;
