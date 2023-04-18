import React from "react";

//!import of expo and react native modules
import { colors } from "../styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/elements";
import Login from "../screens/Login";
import Options from "../screens/Options";
import CircleButton from "../componentsFolder/buttons/CircleButton";
const Stack = createStackNavigator();
const { white, black } = colors;

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: () => null,

          headerLeft: (props) => (
            <CircleButton icon="chevron-left" {...props} />
          ),
          headerStyle: {
            height: 120,
            borderBottomWidth: 0,
            backgroundColor: white,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
          },
          headerLeftContainerStyle: {
            position: "absolute",
            left: 0,
            bottom: 20,
            paddingLeft: 15,
          },
          headerTintColor: black,

          cardStyle: { backgroundColor: white },
        }}
      >
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ header: () => null }}
          />
          <Stack.Screen name="Options" component={Options} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
