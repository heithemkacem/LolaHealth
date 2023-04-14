import React from "react";

//!import of expo and react native modules
import { colors } from "../styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/elements";
import Login from "../screens/Login";

const Stack = createStackNavigator();
const { white, black } = colors;

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerLeft: (props) => <HeaderBackButton {...props} />,
          headerTintColor: black,
          headerStyle: {
            height: 70,
            borderBottomWidth: 0,
            backgroundColor: white,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 25,
          },
        }}
      >
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              header: () => null,
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
