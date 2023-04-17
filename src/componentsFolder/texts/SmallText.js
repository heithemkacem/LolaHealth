import React from "react";
import { colors } from "../../styles/colors";
import { Text } from "react-native";
const { gray } = colors;

const SmallText = (props) => {
  return (
    <Text
      style={[
        {
          fontWeight: 700,
          fontSize: 13,
          color: gray,
          textAlign: "center",
        },
        props.style,
      ]}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default SmallText;
