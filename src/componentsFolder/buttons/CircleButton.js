import React from "react";
import { Pressable } from "react-native";
import { styles } from "../../styles/styles";
import { colors } from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CircleButton = (props) => {
  console.log(props);
  return (
    <Pressable
      style={[props.style, styles.closeButton]}
      onPress={props.onPress}
    >
      <MaterialCommunityIcons
        name={props.icon}
        size={19}
        color={colors.black}
        style={styles.iconStyle}
      />
    </Pressable>
  );
};

export default CircleButton;
