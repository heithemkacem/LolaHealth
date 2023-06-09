import React from "react";
import { colors } from "../../styles/colors";
import SmallText from "./SmallText";
import { Pressable } from "react-native";
const { darkgray } = colors;

const PressableText = (props) => {
  return (
    <Pressable {...props} onPress={props.onPress}>
      <SmallText
        style={[
          props.style,
          {
            fontWeight: 500,
            fontSize: 13,
            textAlign: "right",
            color: darkgray,
          },
        ]}
      >
        {props.children || props.title}
      </SmallText>
    </Pressable>
  );
};

export default PressableText;
