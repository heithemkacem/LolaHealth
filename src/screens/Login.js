import React from "react";
import { Text, View } from "react-native";
import { colors } from "../styles/colors";
import MainContainer from "../componentsFolder/containers/MainContainer";
import Logo from "../componentsFolder/imageComponents/Logo";

const Login = () => {
  return (
    <MainContainer>
      <View>
        <Logo src={require("../assets/icon.png")} />
      </View>
    </MainContainer>
  );
};

export default Login;
