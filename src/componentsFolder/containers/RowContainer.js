//!This container give a row flex display of his childrens and space between them
import React from "react";
import { View } from "react-native";

const RowContainer = (props) => {
  return (
    <View
      style={[
        props.style,
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
      {...props}
    >
      {props.children}
    </View>
  );
};

export default RowContainer;
