//!This container give a row flex display of his childrens and space between them
import React from "react";
import { View } from "react-native";

const ColumnContainer = (props) => {
  return (
    <View
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "space-between",
        alignItems: "center",
        padding: 15,
      }}
    >
      {props.children}
    </View>
  );
};

export default ColumnContainer;
