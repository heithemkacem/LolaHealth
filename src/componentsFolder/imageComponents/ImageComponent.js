//!Logo Component
import React from "react";
import { ScreenHeight } from "../../util/shared";
import { Image, View } from "react-native";

const ImageComponent = ({ src, width, height, ...props }) => {
  return (
    <View
      style={{
        ...props.style,
        height: ScreenHeight * 0.25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={src} style={{ width: width, height: height }} />
    </View>
  );
};

export default ImageComponent;
