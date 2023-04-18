//!This is the input coponents of all forms
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { colors } from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RowContainer from "../containers/RowContainer";
const { primary, secondary, white, lightgray, darkgray, grayforlabel } = colors;

const StyledTextInput = ({ icon, label, errors, isPassword, ...props }) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState("white");
  const [iconBackgroundColor, setIconBackgroundColor] = useState(darkgray);
  const [labelStyle, setLabelStyle] = useState({
    position: "absolute",
    top: "28%",
    left: 47,
    zIndex: 1,
    borderRadius: 3,
  });
  const [labelTextStyle, setLabelTextStyle] = useState({
    fontSize: 15,
    fontWeight: 500,
    color: grayforlabel,
  });

  const customOnBlur = (value) => {
    //if the input is empty set the label to the initial position
    if (value.nativeEvent.text === "") {
      setInputBackgroundColor("transparent");
      setIconBackgroundColor(darkgray);
      setLabelStyle({
        position: "absolute",
        top: "28%",
        left: 47,
        zIndex: 1,
        borderRadius: 3,
      });
      setLabelTextStyle({
        fontSize: 15,
        fontWeight: 500,
        color: grayforlabel,
      });
    } else {
      setInputBackgroundColor("transparent");
      setIconBackgroundColor(primary);
      setLabelStyle({
        position: "absolute",
        top: "-23.3%",
        left: 12,
        zIndex: 1,
        borderRadius: 3,
        backgroundColor: white,
        padding: 3,
      });
      setLabelTextStyle({
        fontSize: 11,
        fontWeight: 500,
        color: lightgray,
      });
    }
  };
  const customOnFocus = () => {
    setInputBackgroundColor("transparent");
    setIconBackgroundColor(primary);
    setLabelStyle({
      position: "absolute",
      top: "-23.3%",
      left: 12,
      zIndex: 1,
      borderRadius: 3,
      backgroundColor: white,
      padding: 3,
    });
    setLabelTextStyle({
      fontSize: 11,
      fontWeight: 500,
      color: lightgray,
    });
  };

  return (
    <View style={[props.style, { paddingBottom: 16, zIndex: 1 }]}>
      <View>
        <View
          style={{
            position: "absolute",
            top: "30%",
            left: 15,
            zIndex: 1,
            borderRadius: 3,
          }}
        >
          <MaterialCommunityIcons
            name={icon}
            size={19}
            color={iconBackgroundColor}
          />
        </View>
        <View style={labelStyle}>
          <Text style={labelTextStyle}>{label}</Text>
        </View>
        <TextInput
          {...props}
          style={{
            backgroundColor: inputBackgroundColor,
            ...props?.style,
            borderColor: errors ? "red" : "#e1e3ea",
            paddingLeft: 47,
            paddingRight: 47,
            fontSize: 16,
            height: 48,
            borderRadius: 8,
            borderWidth: 1,
          }}
          secureTextEntry={isPassword}
          onFocus={() => customOnFocus()}
          onChange={(value) => customOnBlur(value)}
        />
      </View>
      <View>
        {
          //if there is an error show the error message and the icon of error message
          errors && (
            //show text that contain the error message

            <RowContainer style={{ padding: 5 }}>
              <Text style={{ color: "red", fontWeight: 500 }}>{errors}</Text>
              <MaterialCommunityIcons
                name="alert-circle"
                size={19}
                color="red"
              />
            </RowContainer>
          )
        }
      </View>
    </View>
  );
};

export default StyledTextInput;
