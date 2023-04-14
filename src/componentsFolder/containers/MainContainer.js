//!This is the main container where you can adjust the padding and margin of the app
import React from "react";
import { SafeAreaView } from "react-native";
import { colors } from "../../styles/colors";
const { white, black } = colors;

const MainContainer = (props) => {
  return (
    <SafeAreaView style={{ padding: 30 }} {...props}>
      {props.children}
    </SafeAreaView>
  );
};

export default MainContainer;
