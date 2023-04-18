//!This is the main container where you can adjust the padding and margin of the app
import React from "react";
import { SafeAreaView } from "react-native";

const MainContainer = (props) => {
  return (
    <SafeAreaView style={[props.style, { padding: 15 }]} {...props}>
      {props.children}
    </SafeAreaView>
  );
};

export default MainContainer;
